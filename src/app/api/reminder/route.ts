import getReminderData from '@/mock/reminderData';
import { NextResponse } from 'next/server';

export function GET() {
	const { REMINDER_DATA } = getReminderData;

	return NextResponse.json(REMINDER_DATA);
}
