import PeriodSelectionBar from '../PeriodSelectionBar/PeriodSelectionBar';
import PaginationButton from '../PaginationButton/PaginationButton';
import MemberRecordPeriodList from '../MemberRecordPeriodList/MemberRecordPeriodList';
import { layout } from './memberRecordPeriod.css';

const MemberRecordPeriod = () => {
  // const {
  //   memberRecords,
  //   isLoading,
  //   totalPagesNumber,
  //   currentPageNumber = 1,
  //   shiftPage,
  // } = useMemberListRecord({
  //   memberId: 1,
  // });

  const data: {
    studyRecords: {
      studyId: string;
      name: string;
      timePerCycle: number;
      totalCycle: number;
      createdDate: string;
    }[];
    pageInfo: {
      totalPages: number;
    };
  } = {
    studyRecords: Array.from({ length: 27 }).map((_, index) => {
      return {
        studyId: String(index),
        name: `안오면 지상렬${index + 1} 1개월`,
        totalCycle: Math.floor(Math.random() * 8) + 1,
        timePerCycle: (Math.floor(Math.random() * (12 - 1 + 1)) + 1) * 5,
        createdDate: '2023-08-16T13:33:02.810Z',
      };
    }),
    pageInfo: {
      totalPages: 12,
    },
  };

  const totalPagesNumber = data.pageInfo.totalPages;
  const currentPageNumber = 1;
  const isLoading = false;
  const shiftPage = async (page: number) => {
    'use server';
  };

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
      {/* <MemberRecordPeriodList
        memberRecords={data.studyRecords}
        isLoading={isLoading}
      /> */}
      {data.studyRecords && data.studyRecords.length > 3 && (
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
