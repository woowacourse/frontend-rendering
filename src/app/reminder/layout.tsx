import Navbar from '@/components/@common/Navbar';
import { Suspense } from 'react';
import ReminderSpinner from './loading';
import ContentHeader from '@/components/@common/ContentHeader';
import { Wrapper } from './ReminderPage.style';

export default function ReminderLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<ContentHeader title='리마인더' />
			<Wrapper>
				<Suspense fallback={<ReminderSpinner />}>{children}</Suspense>
			</Wrapper>
			<Navbar />
		</div>
	);
}
