import { MOCK_COMMENT_LIST } from '@mocks/comment';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(MOCK_COMMENT_LIST);
}
