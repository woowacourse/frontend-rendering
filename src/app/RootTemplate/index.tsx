'use client';
import { Suspense } from 'react';
import { PageArea, Wrapper } from './RootTemplate.style';

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<Wrapper>
			<PageArea>
				<Suspense fallback={<div>로딩중입니둥~</div>}>{children} </Suspense>
			</PageArea>
		</Wrapper>
	);
};

export default RootTemplate;
