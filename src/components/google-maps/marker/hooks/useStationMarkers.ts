import { useQuery } from '@tanstack/react-query';

import { useExternalValue } from '@utils/external-state';
import { getStoreSnapshot } from '@utils/external-state/tools';
import { getDisplayPosition } from '@utils/google-maps';
import { setSessionStorage } from '@utils/storage';

import { getGoogleMapStore } from '@stores/google-maps/googleMapStore';
import { clientStationFiltersStore } from '@stores/station-filters/clientStationFiltersStore';
import { DELTA_AREA_BREAKPOINTS } from 'constants/googleMaps';
import { QUERY_KEY_STATION_MARKERS } from 'constants/queryKeys';
import { SESSION_KEY_LAST_REQUEST_POSITION } from 'constants/storageKeys';

import type { DisplayPosition } from '@type';
import type { StationMarker } from '@type/stations';

const isMapLoaded = (displayPosition: DisplayPosition) => {
  const { latitudeDelta, longitudeDelta } = displayPosition;

  return !(latitudeDelta === 0 && longitudeDelta === 0);
};

export const fetchStationMarkers = async () => {
  const googleMap = getStoreSnapshot(getGoogleMapStore());
  const displayPosition = getDisplayPosition(googleMap);

  if (!isMapLoaded(displayPosition)) {
    throw new Error('지도가 로드되지 않았습니다');
  }

  if (
    displayPosition.latitudeDelta * displayPosition.longitudeDelta >
    DELTA_AREA_BREAKPOINTS.medium
  ) {
    setSessionStorage<DisplayPosition>(SESSION_KEY_LAST_REQUEST_POSITION, null);

    return new Promise<StationMarker[]>((resolve) => resolve([]));
  }
};

export const useStationMarkers = () => {
  const {
    fastChargeStationFilter,
    privateStationFilter,
    parkingFreeStationFilter,
    availableStationFilter,
  } = useExternalValue(clientStationFiltersStore);

  return useQuery({
    queryKey: [QUERY_KEY_STATION_MARKERS],
    queryFn: fetchStationMarkers,
    select: (data) => {
      return data.filter((station) => {
        const { availableCount, isParkingFree, isPrivate, quickChargerCount } = station;

        const isNoAvailable = availableStationFilter.isAvailable && availableCount === 0;
        const isNoFastCharge = fastChargeStationFilter.isAvailable && quickChargerCount === 0;
        const isNoFreeParking = parkingFreeStationFilter.isAvailable && !isParkingFree;
        const isNoPublic = privateStationFilter.isAvailable && isPrivate;

        if (isNoAvailable || isNoFastCharge || isNoFreeParking || isNoPublic) {
          return false;
        }
        return true;
      });
    },
  });
};
