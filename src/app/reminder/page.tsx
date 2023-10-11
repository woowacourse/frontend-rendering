import ReminderAPI from '@/apis/reminder';
import ReminderBox from '@/app/reminder/components/ReminderBox';
import { convertReminderData } from './hooks/useReminder';
import { Wrapper } from './ReminderPage.style';
import ContentHeader from '@/components/@common/ContentHeader';
import { TodayStatus } from '@/types/reminder';

const getData = async () => {
	const res = await ReminderAPI.getReminder();
	return await res.json();
};
const ReminderPage = async () => {
	// const data = await getData();
	// const reminderData = convertReminderData(data);
	const reminderData: { data: []; status: TodayStatus } = {
		data: [],
		status: 'late',
	};
	return (
		<Wrapper $status={reminderData.status}>
			<ContentHeader title='리마인더' />
			<ReminderBox reminderData={reminderData} />
		</Wrapper>
	);
};

export default ReminderPage;
