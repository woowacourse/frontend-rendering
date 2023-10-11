import ReminderAPI from '@/apis/reminder';
import ReminderBox from '@/app/reminder/components/ReminderBox';
import { Wrapper } from './ReminderPage.style';
import ContentHeader from '@/components/@common/ContentHeader';

import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';
import throwOnInvalidStatus from '@/utils/throwOnInvalidStatus';
import { getReminder } from './hooks/useReminder';

export default async function ReminderPage() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['reminder'],
		queryFn: getReminder,
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Wrapper>
				<ContentHeader title='리마인더' />
				<ReminderBox />
			</Wrapper>
		</HydrationBoundary>
	);
}
