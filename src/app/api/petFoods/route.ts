import { NextResponse } from 'next/server';
import { getPetFoodsFixture } from '@/mocks/petFoodsFixture';

export async function GET() {
  return NextResponse.json(getPetFoodsFixture());
}
