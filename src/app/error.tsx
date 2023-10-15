"use client";

import Button from "@/components/common/Button/Button";
import Typography from "@/components/common/Typography/Typography";
import { ROUTES_PATH } from "@/constants/routes";
import color from "@/styles/color";
import Link from "next/link";
import { styled } from "styled-components";

export type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
  layoutHeight?: string;
};

const ErrorFallback = ({ error, reset, layoutHeight = "100vh" }: ErrorFallbackProps) => {
  return (
    <Layout height={layoutHeight}>
      <Typography variant="h3">문제가 발생했습니다.</Typography>
      <Typography variant="p3">{error.message}</Typography>
      <Button $block={false} size="small" variant="secondary" onClick={reset}>
        다시 시도하기
      </Button>
      <Link href={ROUTES_PATH.landing} onClick={reset}>
        홈으로 이동하기
      </Link>
    </Layout>
  );
};

export default ErrorFallback;

const Layout = styled.section<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    color: ${color.blue[500]};
    text-decoration: underline;
  }

  button > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
