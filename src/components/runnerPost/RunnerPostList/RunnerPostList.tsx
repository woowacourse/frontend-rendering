import React from 'react';
import { RunnerPost } from '@/types/runnerPost';
import * as styles from './runnerPostList.css';
import RunnerPostItem from '../RunnerPostItem/RunnerPostItem';

interface Props {
  posts: RunnerPost[];
}

const RunnerPostList = ({ posts }: Props) => {
  return (
    <div className={styles.runnerPostWrapper}>
      {posts?.map((runnerPostData) => (
        <RunnerPostItem key={runnerPostData.runnerPostId} runnerPostData={runnerPostData} />
      ))}
    </div>
  );
};

export default RunnerPostList;
