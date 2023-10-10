import { StyledLoadingContainer, StyledMessage } from '@ui/Loading/Loading.style';

import Image from 'next/image';

const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledMessage>
        열심히 로딩하고 있어요<span>잠시만 기다려 주세요...</span>
      </StyledMessage>
      <Image src="/loading.svg" alt="로딩중" width={400} height={200} priority />
    </StyledLoadingContainer>
  );
};

export default Loading;
