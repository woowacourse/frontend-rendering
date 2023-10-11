import ReminderBox from '@/app/reminder/components/ReminderBox';
import ContentHeader from '@/components/@common/ContentHeader';

import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import { getReminder } from './hooks/useReminder';

export default async function ReminderPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['reminder'],
		queryFn: getReminder,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ReminderBox />
		</HydrationBoundary>
	);
}
