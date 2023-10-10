'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useMemberRecordPeriod } from '../contexts/MemberRecordPeriodProvider';
import { ResponseMemberListRecord, StudyInfo } from '@/types/record';

type Props = {
  memberId: string;
};

const useMemberListRecord = ({ memberId }: Props) => {
  const { startDate, endDate, page, triggerSearchRecord, updatePage } =
    useMemberRecordPeriod();
  const [isLoading, setIsLoading] = useState(false);
  const [memberRecords, setMemberRecords] = useState<StudyInfo[] | null>(null);
  const [totalPagesNumber, setTotalPagesNumber] = useState<number>(1);

  const fetchAPi =
    startDate && endDate
      ? `/api/view/study-records?memberId=${memberId}&page=${
          page - 1
        }&size=${20}&startDate=${startDate}&endDate=${endDate}&sort=createdDate,desc`
      : `/api/view/study-records?memberId=${memberId}&page=${
          page - 1
        }&size=${20}&sort=createdDate,desc`;

  const shiftPage = (page: number) => updatePage(page);

  const fetchMemberListRecord = () => {
    setIsLoading(true);

    fetch(fetchAPi)
      .then((res) => res.json())
      .then((data: ResponseMemberListRecord) => {
        setMemberRecords(data.studyRecords || []);
        setTotalPagesNumber(data.pageInfo.totalPages);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMemberListRecord();
  }, [triggerSearchRecord]);

  return {
    memberRecords,
    isLoading,
    totalPagesNumber,
    currentPageNumber: page,
    shiftPage,
  };
};

export default useMemberListRecord;
