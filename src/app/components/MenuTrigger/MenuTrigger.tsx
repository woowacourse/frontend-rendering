import color from '@/styles/color';
import UserProfileIcon from '@/components/icons/UserProfileIcon';
import { guestProfileWrapper, layout, name } from './menuTrigger.css';

const MenuTrigger = () => {
  return (
    <div className={layout}>
      <p className={name}>GUEST</p>
      <div className={guestProfileWrapper}>
        <UserProfileIcon color={color.neutral[800]} />
      </div>
    </div>
  );
};

export default MenuTrigger;
