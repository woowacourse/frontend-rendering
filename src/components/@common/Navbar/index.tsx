'use client';
import SvgStroke, { ICONS } from '../SvgIcons/SvgStroke';
import { usePathname } from 'next/navigation';
import {
	NavItemCenter,
	NavItemArea,
	NavLabel,
	NavButton,
	Wrapper,
	NavLink,
} from './Navbar.style';
import theme from '@/style/theme.style';
import { URL_PATH } from '@/constants';

const Navbar = () => {
	const pathname = usePathname();
	const NavItem = (props: {
		path: string;
		iconId: (typeof ICONS)[number];
		label: string;
	}) => {
		const { path, iconId, label } = props;
		const active = path === pathname;
		const iconColor = active
			? theme.color.fontPrimaryForBackground
			: theme.color.subLight;

		return (
			<NavItemArea $active={active}>
				<NavItemCenter>
					<SvgStroke color={iconColor} size={24} icon={iconId} />
					<NavLabel $active={active}>{label}</NavLabel>
				</NavItemCenter>
			</NavItemArea>
		);
	};

	return (
		<Wrapper>
			<NavLink href={URL_PATH.main}>
				<NavItem path={URL_PATH.main} iconId='home-line' label='메인' />
			</NavLink>
			<NavLink href={URL_PATH.garden}>
				<NavItem
					path={URL_PATH.garden}
					iconId='bulletin-board-line'
					label='모두의 정원'
				/>
			</NavLink>
			<NavLink href={URL_PATH.reminder}>
				<NavItem path={URL_PATH.reminder} iconId='reminder' label='리마인더' />
			</NavLink>
			<NavLink href={URL_PATH.petList}>
				<NavItem path={URL_PATH.petList} iconId='leaf' label='내 식물' />
			</NavLink>
			<NavLink href={URL_PATH.myPage}>
				<NavItem
					path={URL_PATH.myPage}
					iconId='account-circle-line'
					label='마이페이지'
				/>
			</NavLink>
		</Wrapper>
	);
};

export default Navbar;
