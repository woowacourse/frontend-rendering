import { useStudyProgressAction } from "@/contexts/StudyProgressProvider";

import { PlanList } from "@/types/study";
import { useEffect, useState } from "react";

const useStudyingForm = () => {
  const [planList, setPlanList] = useState<PlanList | null>(null);
  const { onNextStep } = useStudyProgressAction();

  useEffect(() => {
    fetch("/api/study-contents")
      .then((response) => response.json() as unknown as PlanList)
      .then((data) => setPlanList(data));
  }, []);

  return { planList, submitForm: onNextStep };
};

export default useStudyingForm;
