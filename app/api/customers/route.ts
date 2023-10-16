import { customers } from '@/app/mocks/customers';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(customers);
}
