import { StudyInfo } from '@/types/record';
import MemberRecordPeriodListSkeleton from './MemberRecordPeriodListSkeleton';
import EmptyMemberRecord from '../EmptyMemberRecord/EmptyMemberRecord';
import { layout } from './memberRecordPeriodList.css';
import MemberRecordItem from '../MemberRecordItem/MemberRecordItem';

type Props = {
  memberRecords: StudyInfo[] | null;
  isLoading: boolean;
};

const MemberRecordPeriodList = ({ memberRecords, isLoading }: Props) => {
  if (isLoading) return <MemberRecordPeriodListSkeleton />;

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
