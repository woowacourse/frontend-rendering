import Link from 'next/link';

const NotFound = () => {
	return (
		<div>
			<h2>저런, 길을 읽으셨군요</h2>
			<p>돌아가세요</p>
			<Link href='/'>홈으로 가기</Link>
		</div>
	);
};

export default NotFound;
