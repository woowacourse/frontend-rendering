import * as S from "./style";

interface SkeletonProps {
  isLarge: boolean;
}

const Skeleton = ({ isLarge }: SkeletonProps) => {
  return (
    <S.Container
      tabIndex={0}
      aria-label="현재 페이지의 내용을 불러오는 중입니다."
    >
      <S.FirstBox $isLarge={isLarge} />
      <S.SecondBox />
      <S.ThirdBox />
    </S.Container>
  );
};

export default Skeleton;
