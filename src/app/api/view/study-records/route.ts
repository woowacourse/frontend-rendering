import {
  STUDY_LIST_ALL,
  STUDY_LIST_EMPTY,
  STUDY_LIST_ONE_MONTH,
  STUDY_LIST_THREE_MONTH,
  STUDY_LIST_WEEK,
} from '@/mock/mockData';
import format from '@/utils/format';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get('page'));
  const startDate = searchParams.get('startDate');

  const today = new Date();
  const month = today.getMonth();

  const studyList = !startDate
    ? {
        studyRecords: STUDY_LIST_ALL.studyRecords.slice(
          20 * page,
          20 * (page + 1)
        ),
        pageInfo: STUDY_LIST_ALL.pageInfo,
      }
    : startDate === format.date(new Date(today.setMonth(month - 3)), '-')
    ? {
        studyRecords: STUDY_LIST_THREE_MONTH.studyRecords.slice(
          20 * page,
          20 * (page + 1)
        ),
        pageInfo: STUDY_LIST_THREE_MONTH.pageInfo,
      }
    : startDate === format.date(new Date(today.setMonth(month - 1)), '-')
    ? {
        studyRecords: STUDY_LIST_ONE_MONTH.studyRecords.slice(
          20 * page,
          20 * (page + 1)
        ),
        pageInfo: STUDY_LIST_ONE_MONTH.pageInfo,
      }
    : startDate === format.date(new Date('2023-07-01'), '-')
    ? {
        studyRecords: STUDY_LIST_EMPTY.studyRecords,
        pageInfo: STUDY_LIST_EMPTY.pageInfo,
      }
    : {
        studyRecords: STUDY_LIST_WEEK.studyRecords.slice(
          20 * page,
          20 * (page + 1)
        ),
        pageInfo: STUDY_LIST_WEEK.pageInfo,
      };

  return Response.json(studyList);
}
