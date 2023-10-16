import { Suspense } from "react";
import { styled } from "styled-components";

import color from "@/styles/color";

import { useProgressInfo, useStudyInfo } from "@/contexts/StudyProgressProvider";

import PlanningForm from "../PlanningForm/PlanningForm";
import RetrospectForm from "../RetrospectForm/RetrospectForm";
import Sidebar from "../Sidebar/Sidebar";
import StudyingForm from "../StudyingForm/StudyingForm";
import { useRouter } from "next/navigation";

const StudyBoard = () => {
  const navigate = useRouter();
  const { step } = useProgressInfo();

  if (step === "done") {
    alert("이미 끝난 스터디입니다.");
    navigate.push(`/`);
    return;
  }

  return (
    <Container>
      <Sidebar />
      <Contents>
        {step === "planning" && <PlanningForm />}
        {step === "studying" && (
          <Suspense fallback={<div>로딩 중..</div>}>
            <StudyingForm />
          </Suspense>
        )}
        {step === "retrospect" && <RetrospectForm />}
      </Contents>
    </Container>
  );
};

export default StudyBoard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Contents = styled.section`
  width: calc(100% - 590px);
  height: 100vh;

  background-color: ${color.neutral[100]};

  padding: 40px 85px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 130px);

    padding: 30px 20px;
  }
`;
