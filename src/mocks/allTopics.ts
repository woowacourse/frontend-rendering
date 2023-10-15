import { Topic } from '@/types/Topic';

const allTopics: Topic[] = [
  {
    id: 23,
    name: '전식당',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 7,
    bookmarkCount: 1002,
    updatedAt: '2023-09-14T16:37:39.576392',
  },
  {
    id: 1,
    name: '지도 생성 도전~!',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg',
    creator: '박근철',
    pinCount: 19,
    bookmarkCount: 5,
    updatedAt: '2023-10-08T16:37:39.576392',
  },
  {
    id: 15,
    name: '은평구 짱',
    image:
      'https://images.unsplash.com/photo-1692023383905-487b88c9bf0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjI3MjIyNg&ixlib=rb-4.0.3&q=80&w=1080',
    creator: '유도영',
    pinCount: 2,
    bookmarkCount: 4,
    updatedAt: '2023-08-17T16:37:39.576392',
  },
  {
    id: 20,
    name: '헬스장 맛집',
    image: 'https://img.hankyung.com/photo/202204/01.29786886.1.jpg',
    creator: '김재연',
    pinCount: 2,
    bookmarkCount: 3,
    updatedAt: '2023-09-14T16:37:39.576392',
  },
  {
    id: 5,
    name: '씽씽씽 달려보자 우리의 울산12',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg',
    creator: '박준현',
    pinCount: 1,
    bookmarkCount: 1,
    updatedAt: '2023-08-17T20:46:43.649789',
  },
  {
    id: 18,
    name: '뽑아온 비공개 지도',
    image:
      'https://images.unsplash.com/photo-1690123153404-74d0b5ec2f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjI3MjU5NQ&ixlib=rb-4.0.3&q=80&w=1080',
    creator: '유도영',
    pinCount: 5,
    bookmarkCount: 1,
    updatedAt: '2023-08-17T21:23:19.562376',
  },
  {
    id: 12,
    name: '잠실',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25A1%25AF%25EB%258D%25B0%25EC%259B%2594%25EB%2593%259C%25ED%2583%2580%25EC%259B%258C&psig=AOvVaw06CDbGebK0FwNQ5u2mkfiF&ust=1692358193326000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjNitrL44ADFQAAAAAdAAAAABAD',
    creator: '박준현',
    pinCount: 2,
    bookmarkCount: 1,
    updatedAt: '2023-08-18T01:01:33.630089',
  },
  {
    id: 16,
    name: '이름 수정',
    image:
      'https://images.unsplash.com/photo-1690123153404-74d0b5ec2f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjI3MjU5NQ&ixlib=rb-4.0.3&q=80&w=1080',
    creator: '유도영',
    pinCount: 2,
    bookmarkCount: 1,
    updatedAt: '2023-09-15T21:07:35.362566',
  },
  {
    id: 451737,
    name: '우테코 짱이지요',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg',
    creator: '박근철',
    pinCount: 2,
    bookmarkCount: 1,
    updatedAt: '2023-09-21T15:55:36.383975',
  },
  {
    id: 11,
    name: '김재연',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37dae18f-9860-4483-bad5-1158a210e5a8/image.svg',
    creator: '김재연',
    pinCount: 3,
    bookmarkCount: 1,
    updatedAt: '2023-10-08T15:33:46.647895',
  },
  {
    id: 13,
    name: '패트릭 ',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 0,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T20:34:40.888072',
  },
  {
    id: 17,
    name: '뽑아온 지도',
    image:
      'https://images.unsplash.com/photo-1690123153404-74d0b5ec2f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MjI3MjU5NQ&ixlib=rb-4.0.3&q=80&w=1080',
    creator: '유도영',
    pinCount: 4,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T20:45:28.036124',
  },
  {
    id: 21,
    name: '우하하하',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 0,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:00:35.412252',
  },
  {
    id: 26,
    name: '이상한 이미지 URL',
    image: 'https://mapbefine.kro.kr/',
    creator: '유도영',
    pinCount: 1,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:37:21.100588',
  },
  {
    id: 27,
    name: 'ㄴㅇㅁㄹㄴㅇㅁㄹ',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 0,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:45:49.813947',
  },
  {
    id: 28,
    name: 'ㅇㄴㅁㄹㅇㄴㅁㄹ',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 3,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:46:23.819771',
  },
  {
    id: 29,
    name: 'sadsadad',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 0,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:55:03.552705',
  },
  {
    id: 30,
    name: 'sdafsdaf',
    image: 'https://map-befine-official.github.io/favicon.png',
    creator: '박근철',
    pinCount: 4,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:55:30.569914',
  },
  {
    id: 31,
    name: 'adfs',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg',
    creator: '엉덩이',
    pinCount: 1,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:57:21.530331',
  },
  {
    id: 32,
    name: '혼자볼거임',
    image: 'https://velog.velcdn.com/images/semnil5202/post/37f3bcb9-0b07-4100-85f6-f1d5ad037c14/image.svg',
    creator: '엉덩이',
    pinCount: 1,
    bookmarkCount: 0,
    updatedAt: '2023-08-17T21:58:11.858228',
  },
];

export default allTopics;
