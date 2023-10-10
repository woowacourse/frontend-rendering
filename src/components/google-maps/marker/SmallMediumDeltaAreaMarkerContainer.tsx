import { useEffect } from 'react';

import { useStationMarkers } from '@marker/hooks/useStationMarkers';

import { useExternalValue } from '@utils/external-state';

import { deltaAreaStore } from '@stores/google-maps/deltaAreaStore';
import type { DeltaAreaState } from '@stores/google-maps/deltaAreaStore/types';
import type { StationMarkerInstance } from '@stores/google-maps/markerInstanceStore';
import { markerInstanceStore } from '@stores/google-maps/markerInstanceStore';

import { useRenderStationMarker } from './hooks/useRenderStationMarker';

const SmallMediumDeltaAreaMarkerContainer = () => {
  const { data: stationMarkers, isSuccess } = useStationMarkers();
  const {
    createNewMarkerInstances,
    getRemainedMarkerInstances,
    removeMarkersOutsideBounds,
    renderDefaultMarkers,
    renderCarffeineMarkers,
  } = useRenderStationMarker();
  const deltaAreaState = useExternalValue(deltaAreaStore);

  const renderMarkerByDeltaAreaState = (
    deltaAreaState: DeltaAreaState,
    markerInstances: StationMarkerInstance[]
  ) => {
    renderCarffeineMarkers(markerInstances, stationMarkers);
    if (deltaAreaState === 'small') {
    }
    if (deltaAreaState === 'medium') {
      renderDefaultMarkers(markerInstances, stationMarkers);
    }
  };

  useEffect(() => {
    if (stationMarkers !== undefined) {
      renderMarkerByDeltaAreaState(deltaAreaState, markerInstanceStore.getState());
    }
  }, [deltaAreaState]);

  if (stationMarkers === undefined || !isSuccess) {
    return <></>;
  }

  const newMarkerInstances = createNewMarkerInstances(
    markerInstanceStore.getState(),
    stationMarkers
  );

  const remainedMarkerInstances = getRemainedMarkerInstances(
    markerInstanceStore.getState(),
    stationMarkers
  );

  removeMarkersOutsideBounds(markerInstanceStore.getState(), stationMarkers);
  renderMarkerByDeltaAreaState(deltaAreaState, newMarkerInstances);

  markerInstanceStore.setState([...remainedMarkerInstances, ...newMarkerInstances]);

  return <></>;
};

export default SmallMediumDeltaAreaMarkerContainer;
