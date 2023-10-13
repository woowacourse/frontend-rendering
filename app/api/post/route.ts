import { MOCK_GUEST_POST_INFO } from '@mocks/post';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(MOCK_GUEST_POST_INFO);
}
