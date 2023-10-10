'use client';

import styled from 'styled-components';

export const Wrapper = styled.div<{ $fontSize: `${number}rem` }>`
	position: relative;

	display: flex;
	flex-direction: column;

	width: 100%;

	font-size: ${(props) => props.$fontSize};
	line-height: ${(props) => {
		const font = Number(props.$fontSize.slice(0, -3));
		return `${Math.ceil(font * 1.2)}rem`;
	}};
`;

export const InputBox = styled.div<{ $openBottom: boolean; $height: string }>`
	z-index: ${(props) =>
		props.$openBottom ? props.theme.zIndex.dropdown : 'auto'};

	display: flex;
	align-items: center;

	padding: 0 12px;

	border: solid 2px ${(props) => props.theme.color.primary};
	border-radius: ${({ $height, $openBottom }) => {
		const half = `calc(${$height} / 2)`;
		return $openBottom ? `${half} ${half} 0 0` : half;
	}};
`;

export const Input = styled.input<{ $height: string }>`
	display: flex;
	align-items: center;

	width: calc(100% - 72px);
	height: ${(props) => props.$height};
	margin: 0 8px;

	font-size: inherit;

	border: none;
	outline: none;
`;
