import { theme } from '@/styles/theme';
import { parseDate } from '@/utils/parseDate';
import styles from './DateCell.module.css';

export interface DateCellProps {
  rawDate: Date;
  currentMonth: number;
}

const DateCell = (props: DateCellProps) => {
  const { rawDate, currentMonth } = props;

  const { date, day } = parseDate(rawDate);
  const isSunday = day === 0;
  const isSaturday = day === 6;
  const isCurrentMonth = rawDate.getMonth() === currentMonth;

  const getTextColor = () => {
    if (isSunday) {
      return theme.color.RED;
    }

    if (isSaturday) {
      return theme.color.PURPLE;
    }

    return theme.color.BLACK;
  };

  return (
    <div className={styles.dateCell}>
      <div
        className={styles.date}
        style={{
          color: getTextColor(),
          opacity: isCurrentMonth ? 1 : 0.3,
        }}
      >
        {date}
      </div>
    </div>
  );
};

export default DateCell;
