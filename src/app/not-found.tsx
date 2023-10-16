"use client";

import Typography from "@/components/common/Typography/Typography";
import { ROUTES_PATH } from "@/constants/routes";
import color from "@/styles/color";
import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";

const NotFound = () => (
  <main>
    <Layout>
      <PageStatus>404</PageStatus>
      <div>
        <Typography variant="p3">
          요청한 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소를 다시 한번 확인해주세요.
        </Typography>
      </div>
      <Link href={ROUTES_PATH.landing}>홈으로 이동하기</Link>
    </Layout>
  </main>
);

export default NotFound;

const Layout = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    text-align: center;
  }

  a {
    color: ${color.blue[500]};
    text-decoration: underline;
  }
`;

const PageStatus = styled.div`
  font-size: 6rem;
  font-weight: 500;
  color: ${color.neutral[600]};
`;
