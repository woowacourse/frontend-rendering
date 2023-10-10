import { NextResponse } from 'next/server';
import newestTopics from '@/mocks/newestTopics';

export async function GET() {
  return NextResponse.json(newestTopics);
}
