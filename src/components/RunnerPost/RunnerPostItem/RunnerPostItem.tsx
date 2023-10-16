import { RunnerPost } from '../../../types/runnerPost';
import Label from '../../Label/Label';
import Avatar from '../../Avatar/Avatar';
import * as S from './RunnerPostItem.style';
import Link from 'next/link';

const REVIEW_STATUS_LABEL_TEXT = {
  ALL: '전체',
  NOT_STARTED: '리뷰 구함',
  IN_PROGRESS: '리뷰 진행',
  DONE: '리뷰 완료',
  OVERDUE: '기간 만료',
};

const RunnerPostItem = ({
  runnerPostData: {
    runnerPostId,
    title,
    deadline,
    tags,
    runnerProfile,
    watchedCount,
    applicantCount,
    reviewStatus,
  },
}: {
  runnerPostData: RunnerPost;
}) => {
  const postUrl = `/runnerPost/${runnerPostId}`;

  return (
    <Link href={postUrl}>
      <S.RunnerPostItemContainer>
        <S.LeftSideContainer>
          <S.PostTitle>{title}</S.PostTitle>
          <S.DeadLineContainer>
            <S.DeadLine>{deadline.replace('T', ' ')} 까지</S.DeadLine>
            <Label
              height="15px"
              colorTheme={
                reviewStatus === 'NOT_STARTED'
                  ? 'WHITE'
                  : reviewStatus === 'IN_PROGRESS'
                  ? 'RED'
                  : 'GRAY'
              }
              fontSize="12px"
            >
              {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
            </Label>
          </S.DeadLineContainer>
          <S.TagContainer>
            {tags.map((tag, index) => (
              <S.Tag key={index}>#{tag}</S.Tag>
            ))}
          </S.TagContainer>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          {runnerProfile ? (
            <S.ProfileContainer>
              <Avatar
                width="40px"
                height="40px"
                imageUrl={runnerProfile.imageUrl}
              />
              <S.ProfileName>{runnerProfile.name}</S.ProfileName>
            </S.ProfileContainer>
          ) : null}
          <S.ChatViewContainer>
            <S.statisticsContainer>
              <S.statisticsImage src={'/eye-icon.svg'} alt="조회수" />
              <S.statisticsText>{watchedCount}</S.statisticsText>
              <S.statisticsImage src={'/applicant-icon.svg'} alt="리뷰요청수" />
              <S.statisticsText>{applicantCount}</S.statisticsText>
            </S.statisticsContainer>
          </S.ChatViewContainer>
        </S.RightSideContainer>
      </S.RunnerPostItemContainer>
    </Link>
  );
};

export default RunnerPostItem;
