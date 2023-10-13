'use client';

import Flex from './components/common/Flex';
import Space from './components/common/Space';
import Text from './components/common/Text';
import Image from 'next/image';

function Error() {
  return (
    <Flex
      $flexDirection="column"
      $justifyContent="center"
      $alignItems="center"
      width="100%"
      height="calc(var(--vh, 1vh) * 100)"
      overflow="hidden"
    >
      <Image src="/LoginErrorIcon.svg" alt="에러 발생" width={200} height={190} />
      <Space size={6} />
      <Flex $flexDirection="column" $justifyContent="center" $alignItems="center">
        <Text color="black" $fontSize="extraLarge" $fontWeight="bold">
          에러가 발생하였습니다. 사이트에 다시 접속해 주세요.
        </Text>
        <Space size={5} />
      </Flex>
    </Flex>
  );
}

export default Error;
