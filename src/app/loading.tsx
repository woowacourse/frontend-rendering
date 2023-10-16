import { Wrapper } from "./loading.style";

const RootLoading = () => {
  return (
    <Wrapper>
      <picture>
        <source srcSet="/piumi-emotionless.png" type="image/webp" />
        <img width={250} src="s" role="status" aria-label="로딩중입니다." />
      </picture>
    </Wrapper>
  );
};

export default RootLoading;
