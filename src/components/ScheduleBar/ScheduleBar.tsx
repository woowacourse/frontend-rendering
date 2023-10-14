import { theme } from '@/styles/theme';
import { GeneratedScheduleBar } from '@/types/schedule';
import styles from './ScheduleBar.module.css';

type ScheduleBarProps = GeneratedScheduleBar;

const ScheduleBar = (props: ScheduleBarProps) => {
  const { title, column, duration, level, roundedStart, roundedEnd } = props;

  const wrapperStyle = {
    position: 'absolute',
    top: `${level * 18 + 36}px`,
    height: '16px',
    left: `${(column * 100) / 7}%`,
    width: `${(duration * 100) / 7}%`,
    padding: `0 ${roundedEnd ? '4px' : 0} 0 ${roundedStart ? '4px' : 0}`,
  } as const;

  const innerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: '6px',
    backgroundColor: theme.color.PRIMARY,
    borderRadius: `${roundedStart ? '4px' : '0'} ${
      roundedEnd ? '4px 4px' : '0 0'
    } ${roundedStart ? '4px' : '0'}`,
    filter: `brightness(${1 + level * 0.4})`,
    cursor: 'pointer',
  } as const;

  return (
    <div style={wrapperStyle}>
      <div className={styles.inner} style={innerStyle}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default ScheduleBar;
