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

export interface Position {
  row: number;
  column: number;
}

export interface GeneratedScheduleBar {
  id: string;
  scheduleId: number;
  schedule: Schedule;
  title: string;
  row: number;
  column: number;
  duration: number;
  level: number;
  roundedStart: boolean;
  roundedEnd: boolean;
}
