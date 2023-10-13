import { MOCK_CATEGORY_LIST } from '@mocks/categoryList';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(MOCK_CATEGORY_LIST);
}
