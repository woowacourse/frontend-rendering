import { schedules } from '@/mocks/fixtures/schedule';
import { NextResponse } from 'next/server';

export async function GET() {
  return Response.json(schedules);
}
