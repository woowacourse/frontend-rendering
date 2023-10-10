import { InputBox, Wrapper, Input } from './SearchBox.style';
import theme from '@/style/theme.style';
import SvgFill from '@/components/@common/SvgIcons/SvgFill';

interface SearchBoxProps {
	value: string;
	height?: `${number}px`;
	fontSize?: `${number}rem`;
	showResultSize?: number;
}

const SearchBox = (props: SearchBoxProps) => {
	const {
		value,
		height = '48px',
		fontSize = '1.6rem',
		showResultSize = 4,
	} = props;
	const numberHeight = Number(height.slice(0, -2));

	return (
		<Wrapper $fontSize={fontSize}>
			<InputBox $openBottom={false} $height={height}>
				<SvgFill
					icon='search'
					size={numberHeight / 1.6}
					color={theme.color.primary}
				/>
				<Input
					type='text'
					value={value}
					onChange={() => alert('준비중입니다.')}
					onKeyDown={() => alert('준비중입니다.')}
					onFocus={() => alert('준비중입니다.')}
					$height={height}
				/>
			</InputBox>
		</Wrapper>
	);
};

export default SearchBox;
