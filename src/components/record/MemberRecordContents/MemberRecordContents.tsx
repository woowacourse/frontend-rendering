'use client';

import { title } from './memberRecordContents.css';
import MemberRecordPeriod from '../MemberRecordPeriod/MemberRecordPeriod';
import { useMemberRecordPeriod } from '@/contexts/MemberRecordPeriodProvider';
import { Suspense } from 'react';

const MemberRecordContents = () => {
  const { startDate, endDate, updatePage, page } = useMemberRecordPeriod();

  return (
    <>
      <div className={title}>윤생님의 스터디 기록</div>
      <Suspense fallback={<div>로딩중...</div>}>
        <MemberRecordPeriod
          shiftPage={updatePage}
          memberId="1"
          startDate={startDate}
          endDate={endDate}
          page={page}
        />
      </Suspense>
    </>
  );
};

export default MemberRecordContents;
