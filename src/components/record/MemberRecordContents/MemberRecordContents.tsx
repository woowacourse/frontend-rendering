import MemberRecordPeriodProvider from '@/contexts/MemberRecordPeriodProvider';
import { title } from './memberRecordContents.css';
import MemberRecordPeriod from '../MemberRecordPeriod/MemberRecordPeriod';

const MemberRecordContents = () => {
  return (
    <>
      <div className={title}>윤생님의 스터디 기록</div>
      <MemberRecordPeriodProvider>
        <MemberRecordPeriod />
      </MemberRecordPeriodProvider>
    </>
  );
};

export default MemberRecordContents;
