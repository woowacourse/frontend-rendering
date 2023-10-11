import Navbar from '@/components/@common/Navbar';
import { Suspense } from 'react';
import ReminderSpinner from './loading';

export default function ReminderLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Suspense fallback={<ReminderSpinner />}>{children}</Suspense>
			<Navbar />
		</>
	);
}
