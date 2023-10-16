import { tripsData } from '@/_data/trips';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(tripsData);
}
