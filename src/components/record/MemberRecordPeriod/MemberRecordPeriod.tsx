import PeriodSelectionBar from '../PeriodSelectionBar/PeriodSelectionBar';
import PaginationButton from '../PaginationButton/PaginationButton';
import MemberRecordPeriodList from '../MemberRecordPeriodList/MemberRecordPeriodList';
import { layout } from './memberRecordPeriod.css';
import { ResponseMemberListRecord } from '@/types/record';

const getMemberRecord = async (
  memberId: string,
  currentPageNumber: number,
  startDate?: string,
  endDate?: string
) => {
  const fetchAPi =
    startDate && endDate
      ? `/api/view/study-records?memberId=${memberId}&page=${
          currentPageNumber - 1
        }&size=${20}&startDate=${startDate}&endDate=${endDate}&sort=createdDate,desc`
      : `/api/view/study-records?memberId=${memberId}&page=${
          currentPageNumber - 1
        }&size=${20}&sort=createdDate,desc`;

  const res = await fetch(fetchAPi);
  const data = (await res.json()) as ResponseMemberListRecord;

  return { studyRecords: data.studyRecords, pageInfo: data.pageInfo };
};

type Props = {
  shiftPage: (page: number) => void;
  memberId: string;
  startDate?: string;
  endDate?: string;
  page: number;
};

const MemberRecordPeriod = async ({
  shiftPage,
  memberId,
  startDate,
  endDate,
  page,
}: Props) => {
  const { studyRecords, pageInfo } = await getMemberRecord(
    memberId,
    page,
    startDate,
    endDate
  );

  return (
    <div className={layout}>
      <PeriodSelectionBar />
      {pageInfo.totalPages !== 0 && (
        <PaginationButton
          totalPagesNumber={pageInfo.totalPages}
          currentPageNumber={page}
          shiftPage={shiftPage}
        />
      )}
      <MemberRecordPeriodList memberRecords={studyRecords} />
      {studyRecords && studyRecords.length > 3 && (
        <PaginationButton
          totalPagesNumber={pageInfo.totalPages}
          currentPageNumber={page}
          shiftPage={shiftPage}
        />
      )}
    </div>
  );
};

export default MemberRecordPeriod;
