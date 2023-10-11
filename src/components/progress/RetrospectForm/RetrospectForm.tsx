import { styled } from "styled-components";

import Button from "@/components/common/Button/Button";
import QuestionTextarea from "@/components/common/QuestionTextarea/QuestionTextarea";
import Typography from "@/components/common/Typography/Typography";

import useDisplay from "@/hooks/useDisplay";

import { RETROSPECT_QUESTIONS } from "@/constants/study";

import ArrowIcon from "@/components/icons/ArrowIcon";

import useRetrospectForm from "../hooks/useRetrospectForm";
import { useRouter } from "next/navigation";

const RetrospectForm = () => {
  const { questionTextareaProps, isInvalidForm, isLastCycle, submitForm } = useRetrospectForm();

  const navigate = useRouter();
  const { isShow: isOpenOptionalQuestion, toggleShow: toggleOptionalQuestion } = useDisplay();

  const handleSubmitForm = async () => {
    submitForm();
    navigate.push("/");
  };

  const buttonText = isLastCycle ? "스터디 종료하기" : "다음 사이클 시작하기";

  return (
    <Layout>
      <QuestionLayout>
        <Typography variant="h5" fontWeight="600">
          다음 항목에 답변해주세요.
        </Typography>
        <QuestionList>
          <QuestionTextarea question={RETROSPECT_QUESTIONS.doneAsExpected} {...questionTextareaProps.doneAsExpected} />
        </QuestionList>
        <OptionalQuestionToggle onClick={toggleOptionalQuestion}>
          <Typography variant="h5" fontWeight="600">
            더 구체적인 회고를 원한다면?
          </Typography>
          <ArrowIcon direction={isOpenOptionalQuestion ? "up" : "down"} />
        </OptionalQuestionToggle>
        {isOpenOptionalQuestion && (
          <QuestionList>
            <QuestionTextarea
              question={RETROSPECT_QUESTIONS.experiencedDifficulty}
              {...questionTextareaProps.experiencedDifficulty}
            />
            <QuestionTextarea question={RETROSPECT_QUESTIONS.lesson} {...questionTextareaProps.lesson} />
          </QuestionList>
        )}
      </QuestionLayout>
      <Button variant="success" type="submit" onClick={handleSubmitForm} disabled={isInvalidForm}>
        {buttonText}
      </Button>
    </Layout>
  );
};

export default RetrospectForm;

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
