import { http } from '@/apis/_http';
import { Schedule } from '@/types/schedule';

export const fetchSchedules = () => {
  return http.get<Schedule[]>('/schedules');
};
