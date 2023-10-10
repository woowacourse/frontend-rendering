'use client';
import type { ReminderExtendType, TodayStatus } from '@/types/reminder';
import {
	ActionBox,
	ContentBox,
	StatusBar,
	Wrapper,
	Alert,
	NickName,
	DictionaryPlantName,
	LinkContainer,
} from './Card.style';
import {
	convertDateKorYear,
	getDateToString,
	getParticularDateFromSpecificDay,
	getStringToDate,
	isDateFormat,
} from '@/utils/date';
import DateInput from '@/components/@common/DateInput';
import { DateValidate } from '@/utils/validate';
import { URL_PATH } from '@/constants';
import Image from 'next/image';
import useReminder from '../../hooks/useReminder';

interface ReminderCardProps {
	data: ReminderExtendType;
}

const SUB_FIX = {
	today: '오늘이에요!',
	late: '일 지났어요🥺',
	future: '일 남았습니다!',
};

const convertSubFix = (status: TodayStatus) => SUB_FIX[status];

const ReminderCard = ({ data }: ReminderCardProps) => {
	const {
		petPlantId,
		status,
		image,
		nickName,
		dictionaryPlantName,
		dday,
		lastWaterDate,
	} = data;

	const { refetch } = useReminder();

	const today = getDateToString();
	const { isDateInRange } = DateValidate;

	const changeDateHandler = (changeDate: string) => {
		if (!isDateFormat(changeDate)) {
			alert('올바른 날짜 형식이 아니에요');

			return;
		}

		alert(`${convertDateKorYear(changeDate).slice(5)}로 물주기 날짜 변경`);
		refetch();
	};

	const waterHandler = (waterDate: string) => {
		if (!isDateFormat(waterDate)) {
			alert('올바른 날짜 형식이 아니에요');
			return;
		}

		alert(`${convertDateKorYear(waterDate).slice(5)}에 물주기 완료`);
		refetch();
	};

	const changeDateValidator = (changeDate: string) => {
		const tomorrow = getParticularDateFromSpecificDay(1);

		return isDateInRange({
			dateToCheck: getStringToDate(changeDate),
			startDate: getStringToDate(tomorrow),
		});
	};

	const waterDateValidator = (waterDate: string) =>
		isDateInRange({
			dateToCheck: getStringToDate(waterDate),
			startDate: getStringToDate(lastWaterDate),
			endDate: getStringToDate(today),
		});

	const alertMessage =
		status === 'today'
			? convertSubFix(status)
			: `${Math.abs(dday)}${convertSubFix(status)}`;

	return (
		<Wrapper aria-label={`${nickName}의 정보`}>
			<LinkContainer
				href={`${URL_PATH.petDetail}/${String(petPlantId)}`}
				aria-label={`${nickName} 상세로 이동`}
			>
				<StatusBar $status={status} />
				<Image src={image} alt={nickName} width={64} height={64} />
				<ContentBox role='list' tabIndex={0}>
					<NickName role='listitem' aria-label='반려 식물 닉네임'>
						{nickName}
					</NickName>
					<DictionaryPlantName role='listitem' aria-label='반려 식물 사전 이름'>
						{dictionaryPlantName}
					</DictionaryPlantName>
					<Alert $status={status} role='listitem' aria-label='물을 줘야하는 날'>
						{alertMessage}
					</Alert>
				</ContentBox>
			</LinkContainer>
			<ActionBox>
				<DateInput
					value=''
					changeCallback={waterHandler}
					validator={waterDateValidator}
					placeholder='물주기'
					min={lastWaterDate}
					max={today}
					aria-label='물 준 날짜 선택'
					$fontSize='1.2rem'
				/>
				<DateInput
					value=''
					changeCallback={changeDateHandler}
					validator={changeDateValidator}
					placeholder={status === 'future' ? '날짜 변경' : '미루기'}
					min={today}
					aria-label='알림을 줄 날짜 선택'
					$fontSize='1.2rem'
				/>
			</ActionBox>
		</Wrapper>
	);
};

export default ReminderCard;
