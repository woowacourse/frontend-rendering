import { useStudyProgressAction } from "@/contexts/StudyProgressProvider";

import { PlanList } from "@/types/study";
import { useEffect, useState } from "react";

const useStudyingForm = () => {
  const { onNextStep } = useStudyProgressAction();

  const getPlanList = async () => {
    const response = await fetch("/api/study-contents");
    return response.json() as unknown as PlanList;
  };

  return { getPlanList, submitForm: onNextStep };
};

export default useStudyingForm;
