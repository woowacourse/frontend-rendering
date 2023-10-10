import { layout, skeletonItem } from './memberRecordPeriodList.css';

const MemberRecordPeriodListSkeleton = () => {
  return (
    <div className={layout}>
      <div className={skeletonItem} />
      <div className={skeletonItem} />
      <div className={skeletonItem} />
    </div>
  );
};

export default MemberRecordPeriodListSkeleton;
