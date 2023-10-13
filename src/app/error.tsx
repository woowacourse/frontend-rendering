"use client";

import Button from "@/components/common/Button/Button";
import * as S from "./not-foundStyled";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <S.NotFoundPageContainer>
      <S.Message>
        <S.Bold>{error.message}</S.Bold>
      </S.Message>
      <Button
        colorTheme="WHITE"
        onClick={() => {
          reset();
        }}
      >
        다시 시도
      </Button>
    </S.NotFoundPageContainer>
  );
}
