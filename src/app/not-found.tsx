import Button from "@/components/common/Button/Button";
import * as S from "./not-foundStyled";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <S.NotFoundPageContainer>
      <S.NotFoundImage src="/not-found.jpg" />
      <S.Message>
        <S.Bold>페이지를 찾을 수 없습니다 😢</S.Bold>
      </S.Message>
      <Button colorTheme="WHITE">
        <Link href="/">홈으로 가기</Link>
      </Button>
    </S.NotFoundPageContainer>
  );
};

export default NotFoundPage;
