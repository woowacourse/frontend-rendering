import { NextResponse } from 'next/server';
import petFoodFixture from '@/mocks/petFoodFixture';

export async function GET() {
  const petFoodsData = petFoodFixture.getPetFoods();

  return NextResponse.json(petFoodsData);
}
