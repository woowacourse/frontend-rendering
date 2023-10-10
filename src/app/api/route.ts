import { NextResponse } from 'next/server';
import allTopics from '@/mocks/allTopics';

export async function GET() {
  return NextResponse.json(allTopics);
}
