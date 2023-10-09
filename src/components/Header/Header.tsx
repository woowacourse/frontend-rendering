'use client';
import { Flex, Text, Theme, Button } from 'hang-log-design-system';

import LogoHorizontal from '@/assets/svg/logo-horizontal.svg';

export default function Header() {
  return (
    <header className="headerStyling">
      <Flex styles={{ justify: 'space-between', align: 'center' }}>
        <Flex styles={{ align: 'center', gap: Theme.spacer.spacing4 }}>
          <LogoHorizontal
            className="getItemStyling"
            tabIndex={0}
            aria-label="행록 로고"
            onClick={() => alert('현재 지원하지 않는 서비스입니다.')}
          />
          <Text
            className="getTapNavigateButtonStyling"
            tabIndex={1}
            aria-label="커뮤니티 페이지 이동 버튼"
            onClick={() => alert('현재 지원하지 않는 서비스입니다.')}
          >
            커뮤니티
          </Text>
          <Text
            className="getTapNavigateButtonStyling"
            tabIndex={2}
            aria-label="내 여행 페이지 이동 버튼"
            onClick={() => alert('현재 지원하지 않는 서비스입니다.')}
          >
            나의 여행
          </Text>
        </Flex>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={() => alert('현재 지원하지 않는 서비스입니다.')}
        >
          로그인
        </Button>
      </Flex>
    </header>
  );
}
