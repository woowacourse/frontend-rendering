import type { MARKER_COLORS } from './CarFfeineMarker.style';
import useRenderStationMarker from './hooks/useRenderStationMarker';
import { markerInstanceStore } from '@stores/google-maps/markerInstanceStore';
import { stations } from 'mocks/stations';
import { useEffect } from 'react';

export type StationAvailability = keyof typeof MARKER_COLORS;

const CarFfeineMarker = () => {
  const { createNewMarkerInstances, renderDefaultMarkers } = useRenderStationMarker();

  const newMarkerInstances = createNewMarkerInstances(markerInstanceStore.getState(), stations);

  useEffect(() => {
    markerInstanceStore.setState([...newMarkerInstances]);

    renderDefaultMarkers(markerInstanceStore.getState(), stations);
  }, []);

  return <></>;
};

export default CarFfeineMarker;
