import getReminderData from '@/mock/reminderData';
import { NextResponse } from 'next/server';

export async function GET() {
	const { REMINDER_DATA } = getReminderData;

	return NextResponse.json(REMINDER_DATA);
}

export async function POST() {}
