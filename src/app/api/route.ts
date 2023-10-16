import restaurants from '@/mock/restaurants';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    restaurants.filter((restaurant) => restaurant.isLiked)
  );
}
