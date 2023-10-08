const TOTAL_CYCLE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

const STUDY_TIME_PER_CYCLE_OPTIONS = [
  20, 25, 30, 35, 40, 45, 50, 55, 60,
] as const;

export type TotalCycleOptions = (typeof TOTAL_CYCLE_OPTIONS)[number];

export type StudyTimePerCycleOptions =
  (typeof STUDY_TIME_PER_CYCLE_OPTIONS)[number];

export type Step = 'planning' | 'studying' | 'retrospect';

export type Member = {
  memberId: string;
  nickname: string;
};

export type Progress = {
  currentCycle: number;
  step: Step;
};

export type Participant = {
  participantId: string;
  nickname: string;
  isHost: boolean;
};

export type ParticipantRecordContent = {
  cycle: number;
  plan: PlanList;
  retrospect: RetrospectList;
};

export type Plan =
  | 'toDo'
  | 'completionCondition'
  | 'expectedProbability'
  | 'expectedDifficulty'
  | 'whatCanYouDo';

export type PlanList = Record<Plan, string>;

export type Retrospect = 'doneAsExpected' | 'experiencedDifficulty' | 'lesson';

export type RetrospectList = Record<Retrospect, string>;

export type StudyInfo = {
  studyId: string;
  name: string;
  totalCycle: number;
  timePerCycle: number;
  createdDate: string;
};

export type ProgressInfo = {
  progressId: string;
  nickname: string;
  currentCycle: number;
  step: Step | 'done';
};

export type StudyMode = 'group' | 'alone';
