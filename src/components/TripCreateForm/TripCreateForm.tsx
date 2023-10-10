'use client';
import type { FormEvent } from 'react';

import styles from './styles.module.css';

import Button from '../common/Button/Button';
import { useCityDateForm } from '@/hooks/useCityDateForm';
import CitySearchBar from '../CitySearchBar/CitySearchBar';
import DateInput from '../DateInput/DateInput';

const TripCreateForm = () => {
  const { updateCityInfo, updateDateInfo, isCityDateValid } = useCityDateForm();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alertNotSupport();
  };

  const alertNotSupport = () => {
    alert('아직 지원하지 않는 기능입니다.');
  };

  return (
    <form className={styles.formStyling} onSubmit={handleSubmit}>
      <CitySearchBar updateCityInfo={updateCityInfo} />
      <DateInput updateDateInfo={updateDateInfo} />
      <Button variant="primary" disabled={!isCityDateValid}>
        기록하기
      </Button>
    </form>
  );
};

export default TripCreateForm;
