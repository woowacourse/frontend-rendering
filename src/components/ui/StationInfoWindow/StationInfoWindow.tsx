import type { MouseEvent } from 'react';

import { useExternalValue } from '@utils/external-state';

import { getStationInfoWindowStore } from '@stores/google-maps/stationInfoWindowStore';

import FlexBox from '@common/FlexBox';
import Loader from '@common/Loader';

import StationInfo from './StationInfo';
import { useFetchStationDetails } from './hooks/useFetchStationDetails';

export interface StationInfoWindowProps {
  selectedStationId: string;
}

const StationInfoWindow = ({ selectedStationId }: StationInfoWindowProps) => {
  const infoWindowInstance = useExternalValue(getStationInfoWindowStore());

  const { stationDetails, isLoading } = useFetchStationDetails(selectedStationId);

  const handleCloseStationWindow = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    infoWindowInstance.infoWindowInstance.close();
  };

  if (isLoading || stationDetails === null) {
    return (
      <FlexBox justifyContent='center' alignItems='center' height='17.52rem'>
        <Loader size='xxl' />
      </FlexBox>
    );
  }

  return (
    <StationInfo
      stationDetails={stationDetails}
      handleCloseStationWindow={handleCloseStationWindow}
    />
  );
};

export default StationInfoWindow;
