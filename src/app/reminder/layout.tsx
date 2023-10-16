import Navbar from '@/components/@common/Navbar';
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
			<Wrapper>{children}</Wrapper>
			<Navbar />
		</div>
	);
}
