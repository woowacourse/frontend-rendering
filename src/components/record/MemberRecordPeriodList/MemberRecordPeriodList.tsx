import { StudyInfo } from '@/types/record';
import MemberRecordPeriodListSkeleton from './MemberRecordPeriodListSkeleton';
import EmptyMemberRecord from '../EmptyMemberRecord/EmptyMemberRecord';
import { layout } from './memberRecordPeriodList.css';
import MemberRecordItem from '../MemberRecordItem/MemberRecordItem';

type Props = {
  memberRecords: StudyInfo[] | null;
};

const MemberRecordPeriodList = ({ memberRecords }: Props) => {
  if (memberRecords && memberRecords.length === 0) return <EmptyMemberRecord />;

  return (
    <ul className={layout}>
      {memberRecords?.map((record) => (
        <MemberRecordItem key={record.studyId} record={record} />
      ))}
    </ul>
  );
};

export default MemberRecordPeriodList;
