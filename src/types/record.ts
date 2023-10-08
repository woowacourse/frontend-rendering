export type StudyInfo = {
  studyId: string;
  name: string;
  totalCycle: number;
  timePerCycle: number;
  createdDate: string;
};

export type MonthStorage = {
  day: number;
  dayOfWeek: number;
  date: Date;
  state: 'prev' | 'cur' | 'next';
}[];

export type CalendarRecord = {
  day: number;
  dayOfWeek: number;
  date: Date;
  state: 'prev' | 'cur' | 'next';
  records: StudyInfo[];
  restRecordsNumber: number;
};
