import { NextResponse } from 'next/server';
import trips from '@/_data/trips';

export function GET() {
  const tripsData = trips.getTrips();

  return NextResponse.json(tripsData);
}
