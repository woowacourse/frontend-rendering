import { title } from './memberRecordContents.css';
import MemberRecordPeriod from '../MemberRecordPeriod/MemberRecordPeriod';
import dynamic from 'next/dynamic';

const DynamicMemberRecordPeriodProvider = dynamic(
  () => import('@/contexts/MemberRecordPeriodProvider'),
  {
    ssr: false,
  }
);

const MemberRecordContents = () => {
  return (
    <>
      <div className={title}>윤생님의 스터디 기록</div>
      <DynamicMemberRecordPeriodProvider>
        <MemberRecordPeriod />
      </DynamicMemberRecordPeriodProvider>
    </>
  );
};

export default MemberRecordContents;
