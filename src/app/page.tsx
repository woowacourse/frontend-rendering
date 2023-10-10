import Image from 'next/image';
import {
	LogoMessage,
	SearchBoxArea,
	SearchMessage,
	Wrapper,
	ImageArea,
} from './page.style';
import LogoSvg from '@/assets/logo.svg';
import Navbar from '@/components/@common/Navbar';
import DictionarySearchBox from '@/components/search/DictionarySearchBox';

const Main = () => {
	return (
		<>
			<Wrapper>
				<LogoMessage>식물을 쉽게</LogoMessage>
				<ImageArea>
					<Image
						src={LogoSvg}
						alt="피움 로고. 녹색으로 '피움'이라는 글자가 적혀 있다."
						width={112}
						priority={true}
					/>
				</ImageArea>
				<SearchBoxArea>
					<DictionarySearchBox />
				</SearchBoxArea>
				<SearchMessage>피움에 등록된 식물을 검색해 보세요!</SearchMessage>
			</Wrapper>
			<Navbar />
		</>
	);
};

export default Main;
