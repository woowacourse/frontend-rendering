import ArrowIcon from '@/components/icons/ArrowIcon';
import { useMemberRecordPeriod } from '@/contexts/MemberRecordPeriodProvider';
import useCalendar from '@/hooks/useCalendar';
import color from '@/styles/color';
import format from '@/utils/format';
import {
  currentMonthDay,
  currentYearMonth,
  dayStyle,
  days,
  layout,
  menuTrigger,
  montStyle,
  shiftButton,
  todayButton,
} from './periodSelectCalendar.css';
import Menu from '@/components/common/Menu/Menu';
import CalendarDayOfWeeks from '../CalendarDayOfWeeks/CalendarDayOfWeeks';

const PeriodSelectCalendar = () => {
  const today = new Date();

  const {
    startDate,
    endDate,
    isMiddleSelectedCustomDate,
    updateStartEndDate,
    updateHoverDays,
  } = useMemberRecordPeriod();

  const {
    year,
    month,
    monthStorage,
    handleMonthShift,
    handleNavigationMonth,
    handleYearShift,
  } = useCalendar(new Date(startDate || today));

  const getDayBackgroundColor = (date: Date, fullDate: string) => {
    if (startDate && startDate === fullDate) return color.blue[200];

    if (endDate && endDate === fullDate) return color.blue[200];

    if (isMiddleSelectedCustomDate(date)) return color.blue[100];

    if (fullDate === format.date(today)) return color.neutral[100];

    return 'transparent';
  };
  return (
    <div className={layout}>
      <div className={montStyle}>
        <div className={currentYearMonth}>
          <span>
            <Menu
              trigger={
                <div className={menuTrigger}>
                  {year}년{' '}
                  <ArrowIcon
                    direction="down"
                    style={{
                      cursor: 'pointer',
                      width: '6px',
                      height: '6px',
                      opacity: '0.6',
                    }}
                  />
                </div>
              }
            >
              {Array.from({ length: today.getFullYear() - 2023 + 2 }).map(
                (_, index) => (
                  <Menu.Item
                    key={index}
                    onClick={() => handleYearShift(2023 + index)}
                  >
                    {2023 + index}년
                  </Menu.Item>
                )
              )}
            </Menu>
          </span>
          <span>
            <Menu
              trigger={
                <div className={menuTrigger}>
                  {month}월{' '}
                  <ArrowIcon
                    direction="down"
                    style={{
                      cursor: 'pointer',
                      width: '6px',
                      height: '6px',
                      opacity: '0.6',
                    }}
                  />
                </div>
              }
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => handleNavigationMonth(index + 1)}
                >
                  {index + 1}월
                </Menu.Item>
              ))}
            </Menu>
          </span>
        </div>
        <div className={shiftButton}>
          <ArrowIcon
            direction="left"
            onClick={() => handleMonthShift('prev')}
            style={{ cursor: 'pointer' }}
          />
          <div
            className={todayButton}
            onClick={() => handleMonthShift('today')}
            style={{ cursor: 'pointer' }}
          >
            ●
          </div>
          <ArrowIcon
            direction="right"
            onClick={() => handleMonthShift('next')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <CalendarDayOfWeeks />
      <ul className={days}>
        {monthStorage.map(({ day, state, date }, index) => (
          <li
            className={`${dayStyle} ${state === 'cur' && currentMonthDay}`}
            key={index}
            onClick={() => updateStartEndDate(date)}
            onMouseEnter={() => updateHoverDays(date)}
            style={{
              backgroundColor: getDayBackgroundColor(
                date,
                format.date(date, '-')
              ),
            }}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeriodSelectCalendar;
