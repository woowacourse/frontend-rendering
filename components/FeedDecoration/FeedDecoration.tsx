import * as S from './FeedDecoration.styled';
import Image from 'next/image';

const FeedDecoration = () => {
  return (
    <S.Container>
      <S.SampleBadge />
      <S.SampleThread css={S.sampleThread1}>
        <S.WritingLine width="85%" delay="1s" color="light" />
        <S.WritingLine width="55%" delay="1.3s" color="light" />
        <S.WritingLine width="60%" delay="1.6s" color="light" />
      </S.SampleThread>
      <S.SampleThread css={S.sampleThread2}>
        <S.WritingLine width="70%" delay="2.8s" color="dark" />
        <S.WritingLine width="30%" delay="3.1s" color="dark" />
      </S.SampleThread>
      <S.SampleThread css={S.sampleThread3} />
      <S.CircleButtonsContainer>
        <S.CircleButton>
          <Image src="/images/arrow-up.svg" width={40} height={40} alt="" />
        </S.CircleButton>
        <S.CircleButton>
          <Image src="/images/write.svg" width={40} height={40} alt="" />
        </S.CircleButton>
      </S.CircleButtonsContainer>
    </S.Container>
  );
};

export default FeedDecoration;
