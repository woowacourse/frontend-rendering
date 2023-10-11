import { PostDetailResponse, transformPostResponse } from '@api/post';

const getMockGuestPost = (): PostDetailResponse => ({
  postId: Math.floor(Math.random() * 100000),
  title: '애국가',
  writer: {
    id: 2,
    nickname: '동해',
  },
  content: '동해물과 백두산이 마르고 닳도록',
  imageUrl: Math.random() > 0.7 ? 'https://source.unsplash.com/random' : '',
  categories: [
    {
      id: 1,
      name: '코르키',
    },
    {
      id: 2,
      name: '이즈리얼',
    },
    {
      id: 3,
      name: '초가스',
    },
  ],
  createdAt: '2023-07-12 12:40',
  deadline: '2023-07-13 18:40',
  imageCount: 0,
  commentCount: 1,
  voteInfo: {
    selectedOptionId: 0,
    totalVoteCount: 0,
    options: [
      {
        optionId: 6,
        content: '1절',
        voteCount: 0,
        votePercent: 0,
        imageUrl: '',
      },
      {
        optionId: 7,
        content: '2절',
        voteCount: 0,
        votePercent: 0,
        imageUrl: '',
      },
      {
        optionId: 8,
        content: '3절',
        voteCount: 0,
        imageUrl: '',
        votePercent: 0,
      },
      {
        optionId: 9,
        content: '4절',
        imageUrl: 'https://source.unsplash.com/random',
        voteCount: 0,
        votePercent: 0,
      },
    ],
  },
});

export const MOCK_GUEST_POST_INFO: PostDetailResponse = getMockGuestPost();
