'use client';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';

import CalendarIcon from '@/assets/svg/calendar-icon.svg';
import { DateRangeData } from '@/types/trip';
import { useOverlay } from '@/hooks/useOverlay';
import Menu from '../common/Menu/Menu';
import Input from '../common/Input/Input';
import styles from './styles.module.css';
import { formatDateRange } from '@/utils/formatter';

interface DateInputProps {
  initialDateRange?: DateRangeData;
  updateDateInfo: (dateRange: DateRangeData) => void;
  required?: boolean;
}

const DateInput = ({
  initialDateRange = { startDate: null, endDate: null },
}: DateInputProps) => {
  const [inputValue] = useState(formatDateRange(initialDateRange));
  const {
    isOpen: isCalendarOpen,
    open: openCalendar,
    close: closeCalendar,
    toggle: toggleCalendar,
  } = useOverlay();

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      openCalendar();
    }
  };

  return (
    <div className={styles.containerStyling}>
      <label className={styles.labelStyling}>
        방문 기간
        <span className={styles.requiredStyling} aria-hidden>
          *
        </span>
      </label>
      <Menu closeMenu={closeCalendar} className={styles.menuStyling}>
        <div onClick={toggleCalendar} className={styles.inputStyling}>
          <Input
            id="date"
            placeholder="방문 날짜를 입력해주세요"
            icon={<CalendarIcon aria-label="캘린더 아이콘" />}
            value={inputValue}
            onKeyDown={handleEnter}
            readOnly
          />
        </div>
        {isCalendarOpen && <div>캘린더열림</div>}
      </Menu>
    </div>
  );
};

export default DateInput;
