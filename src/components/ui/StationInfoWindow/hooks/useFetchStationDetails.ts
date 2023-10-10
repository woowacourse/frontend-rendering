import { useEffect, useState } from 'react';

import { fetchStationDetails } from '@hooks/fetch/fetchStationDetails';

import type { StationDetails } from '@type';

export const useFetchStationDetails = (stationId: string) => {
  const [stationDetails, setStationDetails] = useState<StationDetails>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchStationDetails(stationId).then((stationDetailsResponse) => {
      setStationDetails(stationDetailsResponse);
      setIsLoading(false);
    });
  }, [stationId]);

  return {
    stationDetails,
    isLoading,
  };
};
