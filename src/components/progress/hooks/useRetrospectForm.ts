import useQuestionTextarea from "@/hooks/useQuestionTextarea";

import { useStudyProgressAction } from "@/contexts/StudyProgressProvider";

const useRetrospectForm = () => {
  const { onNextStep } = useStudyProgressAction();

  const questionTextareaProps = {
    doneAsExpected: useQuestionTextarea({
      minLength: 10,
      maxLength: 500,
      required: true,
    }),
    experiencedDifficulty: useQuestionTextarea({
      maxLength: 500,
    }),
    lesson: useQuestionTextarea({
      maxLength: 500,
    }),
  } as const;

  const isInvalidForm = !!(
    questionTextareaProps.doneAsExpected.errorMessage ||
    questionTextareaProps.experiencedDifficulty.errorMessage ||
    questionTextareaProps.lesson.errorMessage
  );

  return { questionTextareaProps, isInvalidForm, isLastCycle: true, submitForm: onNextStep };
};

export default useRetrospectForm;
