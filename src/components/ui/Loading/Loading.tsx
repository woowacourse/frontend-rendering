import { StyledLoadingSvgContainer, StyledMessage } from '@ui/Loading/Loading.style';

import LoadingSvg from '@assets/loading.svg';
import Image from 'next/image';

const Loading = () => {
  return (
    <>
      <StyledMessage>
        열심히 로딩하고 있어요<span>잠시만 기다려 주세요...</span>
      </StyledMessage>
      <StyledLoadingSvgContainer>
        <Image src={LoadingSvg} alt="로딩중..."/>
      </StyledLoadingSvgContainer>
    </>
  );
};

export default Loading;
