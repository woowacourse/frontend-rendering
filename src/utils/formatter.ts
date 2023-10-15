import type { DateRangeData } from "../types/trips";

export const formatDate = (date: string) => {
  return date.replace(/-/g, ".");
};

export const formatMonthDate = (date: string) => {
  return formatDate(date).slice(5);
};

export const formatNumberToMoney = (number: number) => {
  return number === 0 ? 0 : number.toLocaleString();
};

export const formatDateRange = ({ startDate, endDate }: DateRangeData) => {
  if (!startDate || !endDate) return "";

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};
