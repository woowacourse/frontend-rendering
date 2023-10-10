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
import { useContext } from 'react';
import { ReminderContext } from '@/app/reminder/context/ReminderProvider';

const ReminderBox = () => {
	const context = useContext(ReminderContext);

	if (context === null || context.reminderData.data.length === 0) {
		return (
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
		);
	}

	const reminderBox = context.reminderData.data.map(([month, reminders]) => {
		return (
			<MonthBox
				key={JSON.stringify(reminders[0])}
				month={month}
				reminderDates={reminders}
			/>
		);
	});

	return <ContentBox>{reminderBox}</ContentBox>;
};

export default ReminderBox;
