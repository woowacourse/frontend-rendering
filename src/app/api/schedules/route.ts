import type { NextApiResponse } from 'next';
import { schedules } from '@/mocks/fixtures/schedule';
import { Schedule } from '@/types/schedule';

export default function handler(res: NextApiResponse<Schedule[]>) {
  res.status(200).json(schedules);
}
