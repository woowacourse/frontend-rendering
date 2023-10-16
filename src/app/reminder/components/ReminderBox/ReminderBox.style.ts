import Link from 'next/link';
import styled from 'styled-components';

export const NoDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 80%;
`;

export const ContentBox = styled.main`
	width: 100%;
	margin: 0 auto;
`;

export const Title = styled.p`
	margin-bottom: 16px;
	font: 700 2.4rem/4rem NanumSquareRound;
`;

export const Register = styled(Link)`
	width: 200px;
	font: 600 2rem/2.4rem NanumSquareRound;
	text-align: center;
`;
