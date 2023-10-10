import type { Station } from '@type';

import type { StationMarkerInstance } from '@stores/google-maps/markerInstanceStore';
import { getStoreSnapshot } from '@utils/external-state/tools';
import { getGoogleMapStore } from '@stores/google-maps/googleMapStore';
import { MARKER_COLORS } from '@marker/CarFfeineMarker.style';

const useRenderStationMarker = () => {
  const googleMap = getStoreSnapshot(getGoogleMapStore());

  const createNewMarkerInstances = (
    prevMarkerInstances: StationMarkerInstance[],
    markers: Station[]
  ) => {
    const newMarkers = markers.filter((marker) =>
      prevMarkerInstances.every((prevMarker) => prevMarker.stationId !== marker.stationId)
    );

    const newMarkerInstances = newMarkers.map((marker) => {
      const { latitude: lat, longitude: lng, stationName, stationId } = marker;

      const markerInstance = new google.maps.marker.AdvancedMarkerElement({
        position: { lat, lng },
        title: stationName,
      });

      return {
        stationId,
        instance: markerInstance,
      };
    });

    return newMarkerInstances;
  };

  const renderDefaultMarkers = (markerInstances: StationMarkerInstance[], markers: Station[]) => {
    markers.forEach((marker) => {
      const markerInstance = markerInstances.find(
        (markerInstance) => markerInstance.stationId === marker.stationId
      )?.instance;

      const markerColor =
        marker.availableCount > 0 ? MARKER_COLORS.available : MARKER_COLORS.noAvailable;

      if (markerInstance) {
        const defaultMarkerDesign = new google.maps.marker.PinElement({
          background: markerColor.background,
          borderColor: markerColor.border,
          glyph: '',
        });

        markerInstance.map = googleMap;
        markerInstance.content = defaultMarkerDesign.element;
      }
    });
  };

  return { renderDefaultMarkers, createNewMarkerInstances };
};

export default useRenderStationMarker;
