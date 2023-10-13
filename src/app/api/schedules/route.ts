import { schedules } from '@/mocks/fixtures/schedule';

export async function GET() {
  return Response.json(schedules);
}
