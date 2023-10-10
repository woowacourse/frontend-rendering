import styled from 'styled-components';
import RunnerPostItem from '../RunnerPostItem/RunnerPostItem';
import { RunnerPost } from '../../../types/runnerPost';
import { RunnerPostWrapper } from './RunnerPostList.style';

interface Props {
  posts: RunnerPost[];
}

const RunnerPostList = ({ posts }: Props) => {
  return (
    <RunnerPostWrapper aria-label="게시글 목록">
      {posts?.map((runnerPostData) => (
        <RunnerPostItem
          key={runnerPostData.runnerPostId}
          runnerPostData={runnerPostData}
        />
      ))}
    </RunnerPostWrapper>
  );
};

export default RunnerPostList;
