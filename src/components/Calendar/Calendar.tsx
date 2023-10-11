'use client';

import Image from 'next/image';
import Spacing from '@/components/Spacing/Spacing';
import { useCalendar } from '@/hooks/useCalendar';
import { Schedule } from '@/types/schedule';
import { DAYS_OF_WEEK } from '@/constants/calendar';
import styles from './Calendar.module.css';
import { Fragment } from 'react';
import DateCell from '@/components/DateCell/DateCell';

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

      <div className={styles.dateCellContainer}>
        {calendar.map((week, rowIndex) => {
          return (
            <Fragment key={rowIndex}>
              {week.map((date, colIndex) => {
                const key = date.toISOString();
                const currentMonth = currentDate.getMonth();

                return (
                  <DateCell
                    key={key}
                    rawDate={date}
                    currentMonth={currentMonth}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
