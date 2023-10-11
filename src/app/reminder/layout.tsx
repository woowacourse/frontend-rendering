import ContentHeader from '@/components/@common/ContentHeader';
import Navbar from '@/components/@common/Navbar';
import ReminderProvider from '@/app/reminder/context/ReminderProvider';
import { Wrapper } from './ReminderPage.style';
import ReminderAPI from '@/apis/reminder';
import { Suspense, use } from 'react';
import { convertReminderData } from './hooks/useReminder';
import ReminderSpinner from './loading';

const getData = async () => {
	const res = await ReminderAPI.getReminder();
	return await res.json();
};

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
				<Suspense fallback={<ReminderSpinner />}>{children}</Suspense>
			</Wrapper>
			<Navbar />
		</ReminderProvider>
	);
}
