'use client';

import { styled } from 'styled-components';

import Button from './components/common/Button';
import Flex from './components/common/Flex';
import Space from './components/common/Space';
import Text from './components/common/Text';
import Image from 'next/image';

function Error({ reset }: { reset: () => void }) {
  return (
    <NotFoundContainer $justifyContent="center" $alignItems="center" width="100vw" height="100vh">
      <Image src="/NotFoundIcon.svg" alt="에러 발생" width={200} height={190} />
      <Space size={6} />
      <Flex $flexDirection="column" $justifyContent="center" $alignItems="center">
        <Text color="black" $fontSize="extraLarge" $fontWeight="bold">
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Text color="black" $fontSize="extraLarge" $fontWeight="bold">
          주소를 확인해 주세요.
        </Text>
        <Space size={5} />
        <NotFoundButton variant="secondary" onClick={() => reset()}>
          메인페이지로 가기
        </NotFoundButton>
      </Flex>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled(Flex)`
  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const NotFoundButton = styled(Button)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;
export default Error;
