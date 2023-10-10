import { NextResponse } from 'next/server';
import bestTopics from '@/mocks/bestTopics';

export async function GET() {
  return NextResponse.json(bestTopics);
}
