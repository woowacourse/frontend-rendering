"use client";

import StudyBoard from "@/components/progress/StudyBoard/StudyBoard";
import StudyProgressProvider from "@/contexts/StudyProgressProvider";
import { styled } from "styled-components";

const StudyProgress = () => {
  return (
    <Layout>
      <StudyProgressProvider>
        <StudyBoard />
      </StudyProgressProvider>
    </Layout>
  );
};

export default StudyProgress;

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
