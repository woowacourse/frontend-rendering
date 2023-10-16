'use client';

import CycleIcon from '@/components/icons/CycleIcon';
import TimeLineIcon from '@/components/icons/TimeLineIcon';
import color from '@/styles/color';
import { StudyInfo } from '@/types/record';
import format from '@/utils/format';
import {
  studyCycleInfoContainer,
  studyCycleInfoLayout,
  studyDate,
  studyItem,
  studyNameDateContainer,
  studyTitle,
} from './memberRecordItem.css';

type Props = {
  record: StudyInfo;
};

const MemberRecordItem = ({ record }: Props) => {
  return (
    <li
      className={studyItem}
      key={record.studyId}
      onClick={() => window.alert('스터디 기록으로 이동')}
    >
      <div className={studyNameDateContainer}>
        <h6 className={studyTitle}>{record.name} 스터디</h6>
        <div className={studyDate}>
          {format.date(new Date(record.createdDate))}
        </div>
      </div>
      <div className={studyCycleInfoLayout}>
        <div className={studyCycleInfoContainer}>
          <CycleIcon color={color.neutral[500]} />
          <span>진행한 총 사이클</span>
          <span>{record.totalCycle}회</span>
        </div>
        <div className={studyCycleInfoContainer}>
          <TimeLineIcon color={color.neutral[500]} />
          <span>사이클 당 학습 시간</span>
          <span>{record.timePerCycle}분</span>
        </div>
      </div>
    </li>
  );
};

export default MemberRecordItem;
