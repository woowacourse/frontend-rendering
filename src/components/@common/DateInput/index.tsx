'use client';
import dynamic from 'next/dynamic';
import Calendar from '../Calendar';
import { Wrapper, DateValue } from './DateInput.style';
import { convertDateKorYear, getStringToDate } from '@/utils/date';
import useToggle from '@/hooks/useToggle';

const DynamicModal = dynamic(() => import('../Modal'), { ssr: false });

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	value: string;
	changeCallback?: (value: string) => void;
	validator?: (value: string) => boolean;
	$fontSize?: string;
}

const DateInput = (props: DateInputProps) => {
	const {
		value = '',
		changeCallback,
		placeholder = '날짜를 입력해 주세요',
		min,
		max,
		validator,
		$fontSize = '',
	} = props;

	const {
		isOn: isModalOpen,
		on: modalOpen,
		off: modalClose,
	} = useToggle(false);

	const dateCallbackHandler = (value: string) => {
		if (validator && !validator(value)) return;

		changeCallback?.(value);
		modalClose();
	};

	return (
		<Wrapper>
			<DateValue
				type='button'
				aria-label={props['aria-label']}
				$placeholder={value === ''}
				$fontSize={$fontSize}
				onClick={modalOpen}
			>
				{value ? convertDateKorYear(value) : placeholder}
			</DateValue>
			<DynamicModal isOpen={isModalOpen} closeModal={modalClose}>
				<Calendar
					selectedDate={value === '' ? null : getStringToDate(value)}
					dateCallback={dateCallbackHandler}
					min={min}
					max={max}
				/>
			</DynamicModal>
		</Wrapper>
	);
};

export default DateInput;
