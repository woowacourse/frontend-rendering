import { NextResponse } from 'next/server';
import mockTopics from '../mocks/mockTopics';

export async function GET() {
  return NextResponse.json(mockTopics);
}
