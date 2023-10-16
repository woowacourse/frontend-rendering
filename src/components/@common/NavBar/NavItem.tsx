import { usePathname } from 'next/navigation';
import theme from 'style/theme.style';
import SvgStroke, { ICONS } from '../SvgIcons/SvgStroke';
import { NavItemArea, NavItemCenter, NavLabel } from './NavBar.style';

const NavItem = (props: { path: string; iconId: (typeof ICONS)[number]; label: string }) => {
  const { path, iconId, label } = props;

  const pathname = usePathname();

  const isActive = path === pathname;
  const iconColor = isActive ? theme.color.fontPrimaryForBackground : theme.color.subLight;

  return (
    <NavItemArea $active={isActive}>
      <NavItemCenter>
        <SvgStroke color={iconColor} size={24} icon={iconId} />
        <NavLabel $active={isActive}>{label}</NavLabel>
      </NavItemCenter>
    </NavItemArea>
  );
};

export default NavItem;
