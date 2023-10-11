import { styled } from "styled-components";

import Button from "@/components/common/Button/Button";
import QuestionTextarea from "@/components/common/QuestionTextarea/QuestionTextarea";
import Typography from "@/components/common/Typography/Typography";

import useDisplay from "@/hooks/useDisplay";

import { PLAN_QUESTIONS } from "@/constants/study";

import ArrowIcon from "@/components/icons/ArrowIcon";

import usePlanningForm from "../hooks/usePlanningForm";

const PlanningForm = () => {
  const { questionTextareaProps, isInvalidForm, submitForm } = usePlanningForm();

  const { isShow: isOpenOptionalQuestion, toggleShow: toggleOptionalQuestion } = useDisplay();

  return (
    <Layout>
      <QuestionLayout>
        <Typography variant="h5" fontWeight="600">
          다음 항목에 답변해주세요.
        </Typography>
        <QuestionList>
          <QuestionTextarea question={PLAN_QUESTIONS.toDo} {...questionTextareaProps.toDo} />
          <QuestionTextarea
            question={PLAN_QUESTIONS.completionCondition}
            {...questionTextareaProps.completionCondition}
          />
        </QuestionList>
        <OptionalQuestionToggle onClick={toggleOptionalQuestion}>
          <Typography variant="h5" fontWeight="600">
            더 구체적인 목표 설정을 원한다면?
          </Typography>
          <ArrowIcon direction={isOpenOptionalQuestion ? "up" : "down"} />
        </OptionalQuestionToggle>
        {isOpenOptionalQuestion && (
          <QuestionList>
            <QuestionTextarea
              question={PLAN_QUESTIONS.expectedProbability}
              {...questionTextareaProps.expectedProbability}
            />
            <QuestionTextarea
              question={PLAN_QUESTIONS.expectedDifficulty}
              {...questionTextareaProps.expectedDifficulty}
            />
            <QuestionTextarea question={PLAN_QUESTIONS.whatCanYouDo} {...questionTextareaProps.whatCanYouDo} />
          </QuestionList>
        )}
      </QuestionLayout>
      <Button variant="primary" type="submit" onClick={submitForm} disabled={isInvalidForm}>
        학습 시작하기
      </Button>
    </Layout>
  );
};

export default PlanningForm;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const QuestionLayout = styled.div`
  width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow-y: auto;

  h5 {
    font-size: 2rem;
  }
`;

const QuestionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (max-width: 768px) {
    gap: 40px;

    & > div {
      padding: 16px 20px 10px 20px;
    }

    h6 {
      min-height: 30px;

      font-size: 1.8rem;
    }

    button {
      padding: 8px 10px;
      font-size: 1.4rem;
    }

    textarea {
      height: 70px;
    }
  }
`;

const OptionalQuestionToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
`;
