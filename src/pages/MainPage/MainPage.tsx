import RunnerPostList from '../../components/RunnerPost/RunnerPostList/RunnerPostList';
import RunnerPostSearchBox from '../../components/RunnerPost/RunnerPostSearchBox/RunnerPostSearchBox';
import Button from '../../components/Button/Button';
import Layout from '../../components/layout/Layout';
import { ReviewStatus, ReviewStatusFilter } from '../../types/runnerPost';
import React from 'react';
import * as S from './MainPage.style';
import { getRunnerPost } from '@/apis/apis';

const MainPage = async () => {
  // const [enteredTag, setEnteredTag] = useState<string>('');
  // const [reviewStatus, setReviewStatus] = useState<ReviewStatus>();

  const runnerPostList = await getRunnerPost({ limit: 10 });

  // const {
  //   data: runnerPostList,
  //   hasNextPage,
  //   fetchNextPage,
  // } = useRunnerPostList(reviewStatus, enteredTag);

  const handleClickMoreButton = () => {
    // fetchNextPage();
  };

  return (
    <Layout maxWidth="none">
      <S.MainContainer>
        <S.TitleWrapper>
          <S.Title>서포터를 찾고 있어요 👀</S.Title>
        </S.TitleWrapper>
        {/* <S.ControlPanelContainer>
          <S.LeftSideContainer>
            <RunnerPostSearchBox
              reviewStatus={reviewStatus}
              setReviewStatus={setReviewStatus}
              setEnteredTag={setEnteredTag}
            />
          </S.LeftSideContainer>
          <S.RightSideContainer></S.RightSideContainer>
        </S.ControlPanelContainer> */}
        <S.RunnerPostContainer>
          <RunnerPostList posts={runnerPostList.data} />
          {/* <S.MoreButtonWrapper>
            {hasNextPage && (
              <Button
                colorTheme="RED"
                width={ '100%' : '1150px'}
                height="55px"
                onClick={handleClickMoreButton}
              >
                더보기
              </Button>
            )}
          </S.MoreButtonWrapper> */}
        </S.RunnerPostContainer>
      </S.MainContainer>
    </Layout>
  );
};

export default MainPage;
