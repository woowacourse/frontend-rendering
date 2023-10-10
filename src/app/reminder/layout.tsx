import ContentHeader from '@/components/@common/ContentHeader';
import Navbar from '@/components/@common/Navbar';
import ReminderProvider from '@/app/reminder/context/ReminderProvider';
import { Wrapper } from './ReminderPage.style';
import ReminderAPI from '@/apis/reminder';
import { use } from 'react';
import { convertReminderData } from './hooks/useReminder';

export default function ReminderLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const data = use(getData());
	const reminderData = convertReminderData(data);

	return (
		<ReminderProvider reminderData={reminderData}>
			<Wrapper $status={reminderData.status}>
				<ContentHeader title='리마인더' />
				{children}
			</Wrapper>
			<Navbar />
		</ReminderProvider>
	);
}

const getData = async () => {
	return await ReminderAPI.getReminder().then((res) => res.json());
};
