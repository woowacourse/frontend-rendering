export type ReviewStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE' | 'OVERDUE';

export interface GetRunnerPostResponse {
  data: RunnerPost[];
}

export interface RunnerPost {
  runnerPostId: number;
  title: string;
  deadline: string;
  tags: string[];
  runnerProfile?: RunnerProfile;
  watchedCount: number;
  applicantCount: number;
  reviewStatus: ReviewStatus;
}

export interface RunnerProfile {
  name: string;
  imageUrl: string;
}

export interface Supporter {
  supporterId: number;
  name: string;
}
