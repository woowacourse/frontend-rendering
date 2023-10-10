'use client';
import type { ArrangedReminderWithStatus } from '@/types/reminder';
import { useQueryClient } from '@tanstack/react-query';
import { createContext } from 'react';

interface ReminderProps {
	reminderData: ArrangedReminderWithStatus;
}

export type ReminderProviderProps = Pick<ReminderProps, 'reminderData'> &
	React.PropsWithChildren;

export const ReminderContext = createContext<ReminderProps | null>(null);

const ReminderProvider = (props: ReminderProviderProps) => {
	const { children, reminderData } = props;

	return (
		<ReminderContext.Provider value={{ reminderData }}>
			{children}
		</ReminderContext.Provider>
	);
};

export default ReminderProvider;
