'use client';
import { CityData, DateRangeData, NewTripData } from '@/types/trip';
import { useCallback, useEffect, useState } from 'react';

const defaultTripData = {
  startDate: null,
  endDate: null,
  cityIds: [],
};

export const useCityDateForm = (initialTripData?: NewTripData) => {
  const [cityDateInfo, setCityDateInfo] = useState<NewTripData>(
    initialTripData ?? defaultTripData
  );
  const [isCityDateValid, setIsCityDateValid] = useState(false);

  const validateInputs = useCallback(() => {
    const { startDate, endDate, cityIds } = cityDateInfo;

    setIsCityDateValid(!!startDate && !!endDate && !!cityIds.length);
  }, [cityDateInfo]);

  const updateCityInfo = useCallback((cities: CityData[]) => {
    const cityIds = cities.map((city) => city.id);

    setCityDateInfo((prev) => ({ ...prev, cityIds }));
  }, []);

  const updateDateInfo = useCallback(
    ({ startDate, endDate }: DateRangeData): void => {
      setCityDateInfo((prev) => ({ ...prev, startDate, endDate }));
    },
    []
  );

  useEffect(() => {
    validateInputs();
  }, [cityDateInfo, validateInputs]);

  return { cityDateInfo, updateCityInfo, updateDateInfo, isCityDateValid };
};
