import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  ArrowPathIcon,
  UserCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { css } from 'styled-components';

import Button from '@common/Button';
import FlexBox from '@common/FlexBox';
import Text from '@common/Text';

import { displayNoneInMobile, displayNoneInWeb } from '@style/mediaQuery';

import { MOBILE_BREAKPOINT } from '@constants';
import Image from 'next/image';

const Menu = () => {
  return (
    <FlexBox css={[fixedPositionCss, paddingCss, borderCss, flexCss]} noRadius='all' nowrap>
      <Button
        height={2.8}
        noRadius='all'
        css={displayNoneInMobile}
        aria-label='새로 고침'
        onClick={() => location.reload()}
      >
        <Image src='/logo-sm.svg' alt='번개 모양의 카페인 로고' width={28} height={28} priority />
      </Button>

      <Button
        noRadius='all'
        css={displayNoneInWeb}
        aria-label='새로 고침'
        onClick={() => location.reload()}
      >
        <ArrowPathIcon width='2.8rem' fill='#555' />
        <Text mt={0.5} variant='caption'>
          새로고침
        </Text>
      </Button>

      <Button
        noRadius='all'
        css={displayNoneInMobile}
        aria-label='주변 충전소 목록 열기'
        onClick={() => alert('주변 충전소 목록')}
      >
        <Bars3Icon width='2.8rem' stroke='#555' />
        <Text mt={0.5} variant='caption'>
          목록
        </Text>
      </Button>

      <Button noRadius='all' aria-label='필터링 메뉴 열기' onClick={() => alert('필터링 메뉴')}>
        <AdjustmentsHorizontalIcon width='2.8rem' stroke='#555' />
        <Text mt={0.5} variant='caption'>
          필터
        </Text>
      </Button>

      <Button noRadius='all' aria-label='로그인 하기' onClick={() => alert('로그인')}>
        <UserCircleIcon width='2.8rem' stroke='#555' />
        <Text mt={0.5} variant='caption'>
          내정보
        </Text>
      </Button>

      <Button
        noRadius='all'
        aria-label='설문조사 하기'
        onClick={() => {
          if (confirm('설문조사에 참여하시겠습니까?')) {
            window.open('https://forms.gle/YQKx1zchUifjUJ396');
          }
        }}
      >
        <ChatBubbleOvalLeftEllipsisIcon width='2.8rem' stroke='#555' />
        <Text mt={0.5} variant='caption'>
          피드백
        </Text>
      </Button>

      <Button
        noRadius='all'
        css={displayNoneInWeb}
        aria-label='충전소 리스트 열기'
        onClick={() => alert('충전소 목록')}
      >
        <Bars3Icon width='2.8rem' stroke='#555' />
        <Text mt={0.5} variant='caption'>
          목록
        </Text>
      </Button>
    </FlexBox>
  );
};

const flexCss = css`
  width: 7rem;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  gap: 3rem;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100vw;
    height: 8.2rem;
    padding-bottom: 0.8rem;
    flex-direction: row;
    align-items: center;
    gap: 0;
    justify-content: space-around;

    & > svg:first-child {
      display: none;
    }
  }
`;

const fixedPositionCss = css`
  position: fixed;
  left: 0;
  z-index: 999;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    bottom: 0;
    z-index: 99;
  }
`;

const paddingCss = css`
  padding-top: 2.4rem;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-top: 0;
  }
`;

const borderCss = css`
  border-right: 0.1rem solid #ddd;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    border-top: 0.1rem solid #ddd;
    border-right: none;
  }
`;

export default Menu;
