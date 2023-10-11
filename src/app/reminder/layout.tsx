import ContentHeader from '@/components/@common/ContentHeader';
import Navbar from '@/components/@common/Navbar';
import ReminderProvider from '@/app/reminder/context/ReminderProvider';
import { Wrapper } from './ReminderPage.style';
import ReminderAPI from '@/apis/reminder';
import { Suspense, use } from 'react';
import { convertReminderData } from './hooks/useReminder';
import ReminderSpinner from './loading';

const getData = async () => {
	return await ReminderAPI.getReminder().then((res) => res.json());
};

export default async function ReminderLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const data = await getData();
	const reminderData = convertReminderData(data);

	return (
		<ReminderProvider reminderData={reminderData}>
			<Wrapper $status={reminderData.status}>
				<ContentHeader title='리마인더' />
				<Suspense fallback={<ReminderSpinner />}>{children}</Suspense>
			</Wrapper>
			<Navbar />
		</ReminderProvider>
	);
}
