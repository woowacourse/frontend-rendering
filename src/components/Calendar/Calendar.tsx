'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Spacing from '@/components/Spacing/Spacing';
import DateCell from '@/components/DateCell/DateCell';
import ScheduleBar from '@/components/ScheduleBar/ScheduleBar';
import { useCalendar } from '@/hooks/useCalendar';
import { generateScheduleBars } from '@/utils/generateScheduleBars';
import { Schedule } from '@/types/schedule';
import { DAYS_OF_WEEK } from '@/constants/calendar';
import styles from './Calendar.module.css';

interface CalendarProps {
  schedules: Schedule[];
}

const Calendar = (props: CalendarProps) => {
  const { schedules } = props;
  const {
    year,
    month,
    calendar,
    currentDate,

    handlers: { handlePrevButtonClick, handleNextButtonClick },
  } = useCalendar();
  const scheduleBars = generateScheduleBars(year, month, schedules);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div />
        <div className={styles.titleContainer}>
          <button
            className={styles.calendarButton}
            onClick={handlePrevButtonClick}
            aria-label="이전 달로 이동하기"
          >
            <Image
              src="/arrow-left.svg"
              alt="왼쪽 화살표 아이콘"
              width={24}
              height={24}
            />
          </button>
          <time className={styles.dateWrapper}>
            <span className={styles.date}>
              {year}년 {month + 1}월
            </span>
          </time>
          <button
            className={styles.calendarButton}
            onClick={handleNextButtonClick}
            aria-label="다음 달로 이동하기"
          >
            <Image
              src="/arrow-right.svg"
              alt="오른쪽 화살표 아이콘"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div>
          <button className={styles.scheduleAddButton}>
            <Image
              src="/plus.svg"
              alt="더하기 모양 아이콘"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <Spacing size={12} />

      <div>
        <div className={styles.days}>
          {DAYS_OF_WEEK.map((day) => {
            return (
              <div className={styles.day} key={day}>
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {calendar.map((week, rowIndex) => {
        return (
          <Fragment key={rowIndex}>
            <div className={styles.scheduleBarContainer}>
              {scheduleBars.map((scheduleBar) => {
                const { id, row } = scheduleBar;

                if (row === rowIndex) {
                  return <ScheduleBar key={id} {...scheduleBar} />;
                }

                return null;
              })}
            </div>
            <div key={week.toString()} className={styles.dateCellContainer}>
              {week.map((date, colIndex) => {
                const key = date.toString();
                const currentMonth = currentDate.getMonth();

                return (
                  <DateCell
                    key={key}
                    rawDate={date}
                    currentMonth={currentMonth}
                  />
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
