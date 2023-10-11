import { BASE_URL } from '@/constants';

export const REMINDER_URL = `${BASE_URL}/api/reminder`;

const headers = {
	'Content-Type': 'application/json',
};

const getReminder = async () => {
	return await fetch(REMINDER_URL, {
		method: 'GET',
		credentials: 'include',
		headers,
		cache: 'no-store',
	});
};

const ReminderAPI = {
	getReminder,
};

export default ReminderAPI;
