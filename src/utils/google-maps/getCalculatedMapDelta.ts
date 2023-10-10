import { NAVIGATOR_PANEL_WIDTH } from '@constants';

import { getDisplayPosition } from '.';
import { getGoogleMapStore } from '@stores/google-maps/googleMapStore';

export const getCalculatedMapDelta = () => {
  const navigationComponentWidth = getNavigationComponentWidth();
  const googleMap = getGoogleMapStore().getState();

  const navigatorAccordionWidthRatio = navigationComponentWidth * 10;
  const calculatedMapDelta =
    getDisplayPosition(googleMap).longitudeDelta * 2 * navigatorAccordionWidthRatio;

  return calculatedMapDelta;
};

export const getNavigationComponentWidth = () => {
  return NAVIGATOR_PANEL_WIDTH;
};
