import type { DateRangeData } from '../types/trip';

export const formatDate = (date: string) => {
  return date.replace(/-/g, '.');
};

export const formatDateRange = ({ startDate, endDate }: DateRangeData) => {
  if (!startDate || !endDate) return '';

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export const formatStringToLetter = (string: string) => {
  const matches = string.match(/^[A-Za-z가-힣ㄱ-ㅎ]+$/g);

  if (!matches) {
    return '';
  }

  return matches[0];
};
