export interface Schedule {
  id: number;
  title: string;
  startDateTime: YYYYMMDDHHMM;
  endDateTime: YYYYMMDDHHMM;
}

export interface ScheduleWithTeamPlaceId extends Schedule {
  teamPlaceId: number;
}

export type ScheduleWithoutId = Omit<Schedule, 'id'>;

export type YYYYMMDDHHMM = `${string}-${string}-${string} ${string}:${string}`;
