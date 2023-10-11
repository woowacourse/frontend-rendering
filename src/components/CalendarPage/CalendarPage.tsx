import { fetchSchedules } from '@/apis/schedule';
import Calendar from '@/components/Calendar/Calendar';

const CalendarPage = async () => {
  // const schedules = await fetchSchedules();

  return <Calendar schedules={[]} />;
};

export default CalendarPage;
