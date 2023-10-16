import color from '@/styles/color';
import { dayOfWeekStyle, layout } from './calendarDayOfWeeks.css';

const DAY_COLOR = {
  일: color.red[600],
  월: color.black,
  화: color.black,
  수: color.black,
  목: color.black,
  금: color.black,
  토: color.blue[600],
} as const;

const DAY_OF_WEEKS = ['일', '월', '화', '수', '목', '금', '토'] as const;

const CalendarDayOfWeeks = () => {
  return (
    <ul className={layout}>
      {DAY_OF_WEEKS.map((dayOfWeek) => (
        <li
          className={dayOfWeekStyle}
          key={dayOfWeek}
          style={{ color: DAY_COLOR[dayOfWeek] }}
        >
          {dayOfWeek}
        </li>
      ))}
    </ul>
  );
};

export default CalendarDayOfWeeks;
