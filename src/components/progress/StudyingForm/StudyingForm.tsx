import { styled } from "styled-components";

import Button from "@/components/common/Button/Button";
import QuestionAnswer from "@/components/common/QuestionAnswer/QuestionAnswer";

import color from "@/styles/color";

import { PLAN_KEYWORDS } from "@/constants/study";

import type { Plan } from "@/types/study";

import useStudyingForm from "../hooks/useStudyingForm";

const StudyingForm = () => {
  const { planList, submitForm } = useStudyingForm();

  const planKeywords = Object.keys(PLAN_KEYWORDS) as Array<Plan>;

  return (
    planList && (
      <Layout>
        <PlanResultList>
          {planKeywords.map((planKey) => (
            <QuestionAnswer
              key={planKey}
              question={PLAN_KEYWORDS[planKey]}
              answer={planList[planKey]}
              iconColor={color.red[600]}
            />
          ))}
        </PlanResultList>
        <Button variant="danger" onClick={submitForm}>
          학습 마치기
        </Button>
      </Layout>
    )
  );
};

export default StudyingForm;

const Layout = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PlanResultList = styled.ul`
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 60px;

  padding: 50px;
  background-color: #fff;
  border-radius: 14px;

  overflow-y: auto;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;

    gap: 40px;

    h5 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
