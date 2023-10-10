'use client';

import Button from '@/components/common/Button/Button';
import CalenderIcon from '@/components/icons/CalenderIcon';
import { PERIOD } from '@/contants/record';
import { useMemberRecordPeriod } from '@/contexts/MemberRecordPeriodProvider';
import useOutsideClick from '@/hooks/useOutsideClick';
import color from '@/styles/color';
import { Period } from '@/types/record';
import { useState } from 'react';
import PeriodSelectCalendar from '../PeriodSelectCalendar/PeriodSelectCalendar';
import {
  hasNotSelectedCustomPeriod,
  hasSelectedCustomPeriodStyle,
  isSelected,
  layout,
  selectCustomPeriodContainer,
  selectDateButton,
  selectDateWrapper,
  selectPeriodButton,
  selectPeriodButtonContainer,
  selectedDate,
} from './periodSelectionBar.css';

const periodTypes: Period[] = ['week', 'oneMonth', 'threeMonth', 'entire'];

const PeriodSelectionBar = () => {
  const { period, startDate, endDate, hasSelectedCustomPeriod, updatePeriod } =
    useMemberRecordPeriod();

  const [isOpenPeriodSelectCalendar, setIsOpenPeriodSelectCalendar] =
    useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsOpenPeriodSelectCalendar(false);
  });

  const handleCustomPeriodSearch = () => {
    if (!startDate || !endDate) {
      window.alert('날짜가 모두 입력되지 않았어요.');

      return;
    }

    updatePeriod('custom');
  };

  return (
    <div className={layout}>
      <div className={selectPeriodButtonContainer}>
        {periodTypes.map((periodType) => (
          <button
            className={`${selectPeriodButton} ${
              period === periodType && isSelected
            }`}
            onClick={() => updatePeriod(periodType)}
            key={periodType}
          >
            {PERIOD[periodType]}
          </button>
        ))}
      </div>
      <div className={selectCustomPeriodContainer}>
        <div className={selectDateWrapper} ref={ref}>
          <div
            className={`${selectedDate} ${
              hasSelectedCustomPeriod
                ? hasSelectedCustomPeriodStyle
                : hasNotSelectedCustomPeriod
            }`}
          >
            {hasSelectedCustomPeriod ? (
              <>
                <div>{startDate && startDate}</div>
                <div>~</div>
                <div>{endDate && endDate}</div>
              </>
            ) : (
              '날짜를 선택해주세요.'
            )}
          </div>
          <div
            className={selectDateButton}
            onClick={() => setIsOpenPeriodSelectCalendar(true)}
          >
            <CalenderIcon color={color.black} style={{ cursor: 'pointer' }} />
          </div>
          {isOpenPeriodSelectCalendar && <PeriodSelectCalendar />}
        </div>
        <Button
          onClick={handleCustomPeriodSearch}
          style={{
            fontSize: '1.4rem',
            backgroundColor: color.white,
            color: color.blue[500],
            border: `1px solid ${color.blue[500]}`,
          }}
        >
          조회
        </Button>
      </div>
    </div>
  );
};

export default PeriodSelectionBar;

// const SelectCustomPeriodContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   button {
//     flex: 1;
//   }

//   @media screen and (max-width: 768px) {
//     flex-direction: column-reverse;
//   }
// `;
