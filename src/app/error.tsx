"use client";

import Button from "@/components/common/Button/Button";
import * as S from "./not-foundStyled";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { replace } = useRouter();

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
      <Button
        colorTheme="WHITE"
        onClick={() => {
          replace("/");
        }}
      >
        홈으로
      </Button>
    </S.NotFoundPageContainer>
  );
}
