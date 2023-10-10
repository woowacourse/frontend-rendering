'use client';

import PeriodSelectionBar from '../PeriodSelectionBar/PeriodSelectionBar';
import PaginationButton from '../PaginationButton/PaginationButton';
import MemberRecordPeriodList from '../MemberRecordPeriodList/MemberRecordPeriodList';
import { layout } from './memberRecordPeriod.css';
import useMemberListRecord from '@/hooks/useMemberListRecord';

const MemberRecordPeriod = () => {
  const {
    memberRecords,
    isLoading,
    totalPagesNumber,
    currentPageNumber = 1,
    shiftPage,
  } = useMemberListRecord({
    memberId: '1',
  });

  return (
    <div className={layout}>
      <PeriodSelectionBar />
      {totalPagesNumber !== 0 && (
        <PaginationButton
          totalPagesNumber={totalPagesNumber}
          currentPageNumber={currentPageNumber}
          isLoading={isLoading}
          shiftPage={shiftPage}
        />
      )}
      <MemberRecordPeriodList
        memberRecords={memberRecords}
        isLoading={isLoading}
      />
      {memberRecords && memberRecords.length > 3 && (
        <PaginationButton
          totalPagesNumber={totalPagesNumber}
          currentPageNumber={currentPageNumber}
          isLoading={isLoading}
          shiftPage={shiftPage}
        />
      )}
    </div>
  );
};

export default MemberRecordPeriod;
