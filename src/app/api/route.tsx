import { NextResponse } from 'next/server';
import myTopics from '@/mocks/myTopics';

export async function GET() {
  return NextResponse.json(myTopics);
}
