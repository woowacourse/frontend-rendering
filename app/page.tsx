'use client';

import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
import Post from '@components/post/Post';
import { MOCK_GUEST_POST_INFO } from '@mocks/post';
import { transformPostResponse } from '@api/post';

export default function Home() {
  return (
    <Post
      isPreview={false}
      postInfo={transformPostResponse(MOCK_GUEST_POST_INFO)}
    />
  );
}
