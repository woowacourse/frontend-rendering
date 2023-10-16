import Layout from '@/components/layout/Layout';
import * as S from './RunnerPostPage.style';
import Button from '@/components/Button/Button';
import Avatar from '@/components/Avatar/Avatar';
import Label from '@/components/Label/Label';
import { getRunnerPostDetail } from '@/apis/apis';

const REVIEW_STATUS_LABEL_TEXT = {
  ALL: '전체',
  NOT_STARTED: '리뷰 구함',
  IN_PROGRESS: '리뷰 진행',
  DONE: '리뷰 완료',
  OVERDUE: '기간 만료',
};

interface Props {
  runnerPostId: number;
}

const RunnerPostPage = async ({ runnerPostId }: Props) => {
  const runnerPostDetail = await getRunnerPostDetail(runnerPostId, false);

  return (
    <S.RunnerPostContainer>
      <S.PostContainer>
        <S.PostHeaderContainer>
          <Label
            width="111px"
            height="20px"
            fontSize="16px"
            colorTheme={
              runnerPostDetail.reviewStatus === 'DONE'
                ? 'GRAY'
                : runnerPostDetail.reviewStatus === 'IN_PROGRESS'
                ? 'RED'
                : 'WHITE'
            }
          >
            {REVIEW_STATUS_LABEL_TEXT[runnerPostDetail.reviewStatus]}
          </Label>
          <S.PostDeadlineContainer>
            <S.PostDeadline>
              {runnerPostDetail.deadline.replace('T', ' ')} 까지
            </S.PostDeadline>
            <S.EditLinkContainer
              $isOwner={
                runnerPostDetail.isOwner &&
                runnerPostDetail.reviewStatus !== 'IN_PROGRESS' &&
                runnerPostDetail.reviewStatus !== 'DONE'
              }
            ></S.EditLinkContainer>
          </S.PostDeadlineContainer>
          <S.PostTitleContainer>
            <S.PostTitle>{runnerPostDetail.title}</S.PostTitle>
            <S.InformationContainer>
              <S.statisticsContainer>
                <S.statisticsImage src={'/eye-icon.svg'} />
                <S.statisticsText>
                  {runnerPostDetail.watchedCount}
                </S.statisticsText>
                <S.statisticsImage src={'/applicant-icon.svg'} />
                <S.statisticsText>
                  {runnerPostDetail.applicantCount}
                </S.statisticsText>
              </S.statisticsContainer>
            </S.InformationContainer>
          </S.PostTitleContainer>
        </S.PostHeaderContainer>
        <S.PostBodyContainer>
          <S.GuideContentsContainer>
            <div>{runnerPostDetail.implementedContents}</div>
            <div>{runnerPostDetail.curiousContents}</div>
          </S.GuideContentsContainer>
          <S.BottomContentContainer>
            <S.LeftSideContainer>
              <S.ProfileContainer>
                <Avatar
                  width="40px"
                  height="40px"
                  imageUrl={runnerPostDetail.runnerProfile.imageUrl}
                />
                <S.Profile>
                  <S.Name>{runnerPostDetail.runnerProfile.name}</S.Name>
                </S.Profile>
              </S.ProfileContainer>
            </S.LeftSideContainer>
            <S.RightSideContainer>
              {runnerPostDetail.isOwner ||
              runnerPostDetail.isApplied ||
              runnerPostDetail.reviewStatus !== 'NOT_STARTED' ? null : (
                <Button
                  colorTheme="WHITE"
                  width="140px"
                  fontSize="15px"
                  fontWeight={700}
                >
                  리뷰 제안하기
                </Button>
              )}
            </S.RightSideContainer>
          </S.BottomContentContainer>
        </S.PostBodyContainer>
        <S.PostFooterContainer>
          <Button
            width="60px"
            colorTheme="GRAY"
            fontSize="14px"
            fontWeight={700}
          >
            목록
          </Button>
        </S.PostFooterContainer>
      </S.PostContainer>
    </S.RunnerPostContainer>
  );
};

export default RunnerPostPage;
