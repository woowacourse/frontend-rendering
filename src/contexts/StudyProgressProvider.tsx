import { type PropsWithChildren, createContext, useState, useContext } from "react";

import type { ProgressInfo, StudyInfo } from "@/types/study";

type StudyProgressAction = {
  onNextStep: () => void;
};

const StudyInfoContext = createContext<StudyInfo | null>(null);
const ProgressInfoContext = createContext<ProgressInfo | null>(null);
const StudyProgressActionContext = createContext<StudyProgressAction | null>(null);

const StudyProgressProvider = ({ children }: PropsWithChildren) => {
  const studyInfo: StudyInfo = {
    studyId: "0",
    name: "zz",
    totalCycle: 3,
    timePerCycle: 25,
    createdDateTime: "",
  };

  const [progressInfo, setProgressInfo] = useState<ProgressInfo>({
    progressId: "0",
    nickname: "zz",
    currentCycle: 1,
    step: "planning",
  });

  const actions = {
    onNextStep: () => {
      if (studyInfo === null || progressInfo === null) return;

      if (progressInfo.step === "planning") {
        setProgressInfo({ ...progressInfo, step: "studying" });
        return;
      }
      if (progressInfo.step === "studying") {
        setProgressInfo({ ...progressInfo, step: "retrospect" });
        return;
      }
      if (progressInfo.step === "retrospect") {
        setProgressInfo({
          ...progressInfo,
          step: "planning",
        });
      }
    },
  };

  if (!studyInfo || !progressInfo) return;

  return (
    <StudyProgressActionContext.Provider value={actions}>
      <StudyInfoContext.Provider value={studyInfo}>
        <ProgressInfoContext.Provider value={progressInfo}>{children}</ProgressInfoContext.Provider>
      </StudyInfoContext.Provider>
    </StudyProgressActionContext.Provider>
  );
};

export default StudyProgressProvider;

export const useStudyInfo = () => {
  const studyInfo = useContext(StudyInfoContext);

  if (studyInfo === null) {
    throw new Error("스터디 정보를 불러오는 중 문제가 발생했습니다.");
  }

  return studyInfo;
};

export const useProgressInfo = () => {
  const progressInfo = useContext(ProgressInfoContext);

  if (progressInfo === null) {
    throw new Error("스터디 정보를 불러오는 중 문제가 발생했습니다.");
  }

  return progressInfo;
};

export const useStudyProgressAction = () => {
  const studyProgressAction = useContext(StudyProgressActionContext);

  if (studyProgressAction === null) {
    throw new Error("스터디 정보를 불러오는 중 문제가 발생했습니다.");
  }

  return studyProgressAction;
};
