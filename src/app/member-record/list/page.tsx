import MemberRecordContents from '@/components/record/MemberRecordContents/MemberRecordContents';
import RecordLayout from '@/components/record/RecordLayout/RecordLayout';
import dynamic from 'next/dynamic';

const DynamicMemberRecordPeriodProvider = dynamic(
  () => import('@/contexts/MemberRecordPeriodProvider'),
  {
    ssr: false,
  }
);

export default function MemberRecord() {
  return (
    <RecordLayout>
      <DynamicMemberRecordPeriodProvider>
        <MemberRecordContents />
      </DynamicMemberRecordPeriodProvider>
    </RecordLayout>
  );
}
