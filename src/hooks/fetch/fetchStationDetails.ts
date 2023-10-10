import { SERVER_URL } from '@constants/server';

import type { StationDetails } from '@type';

export const fetchStationDetails = async (stationId: string) => {
  if (stationId === null) {
    throw new Error('선택된 충전소가 없습니다.');
  }

  const stationDetails = await fetch(`${SERVER_URL}/stations/${stationId}`, {
    method: 'GET',
  }).then<StationDetails>(async (response) => {
    if (!response.ok) {
      throw new Error('충전소를 들고올 수 없습니다.');
    }

    const data: StationDetails = await response.json();
    return data;
  });

  return stationDetails;
};
