'use client';
import React, { useState, useEffect } from 'react';
import { RunnerPost } from '@/types/runnerPost';
import * as styles from './runnerPostList.css';
import RunnerPostItem from '../RunnerPostItem/RunnerPostItem';

const RunnerPostList = () => {
  const [posts, setPosts] = useState<RunnerPost[]>([]);

  useEffect(() => {
    fetch('http://localhost/posts/runner')
      .then((res) => res.json())
      .then((result) => setPosts(result.data));
  }, []);

  return (
    <div className={styles.runnerPostWrapper}>
      {posts.map((runnerPostData) => (
        <RunnerPostItem key={runnerPostData.runnerPostId} runnerPostData={runnerPostData} />
      ))}
    </div>
  );
};

export default RunnerPostList;
