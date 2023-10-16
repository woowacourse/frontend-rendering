'use client';
import MonthBox from '@/app/reminder/components/MonthBox';
import {
	ContentBox,
	NoDataContainer,
	Register,
	Title,
} from './ReminderBox.style';
import Image from 'next/image';
import { URL_PATH } from '@/constants';
import PiumiEmotionlessPng from '@/assets/piumi-emotionless.png';
import useReminder from '../../hooks/useReminder';

const ReminderBox = () => {
	const { data: reminderData } = useReminder();

	const reminderBox = reminderData?.data.map(([month, reminders]) => {
		return (
			<MonthBox
				key={JSON.stringify(reminders[0])}
				month={month}
				reminderDates={reminders}
			/>
		);
	});

	return (
		<>
			{reminderData?.data.length === 0 ? (
				<NoDataContainer>
					<Image
						width={250}
						height={250}
						src={PiumiEmotionlessPng}
						alt='감정 없는 피우미'
						aria-hidden
					/>
					<Title>아직 등록된 식물이 없습니다!</Title>
					<Register href={URL_PATH.petRegisterSearch}>
						식물 등록하러 가기
					</Register>
				</NoDataContainer>
			) : (
				<ContentBox>{reminderBox}</ContentBox>
			)}
		</>
	);
};

export default ReminderBox;
