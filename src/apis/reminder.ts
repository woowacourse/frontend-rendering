import { BASE_URL } from '@/constants';

export const REMINDER_URL = `${BASE_URL}/api/reminder`;

const headers = {
	'Content-Type': 'application/json',
};

const getReminder = () => {
	return fetch(REMINDER_URL, {
		method: 'GET',
		credentials: 'include',
		headers,
	});
};

const ReminderAPI = {
	getReminder,
};

export default ReminderAPI;
