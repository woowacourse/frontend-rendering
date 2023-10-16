import color from '@/styles/color';
import UserProfileIcon from '@/components/icons/UserProfileIcon';
import {
  guestProfileWrapper,
  layout,
  name,
  profileImage,
} from './menuTrigger.css';
import Image from 'next/image';

const MenuTrigger = () => {
  return (
    <div className={layout}>
      <p className={name}>윤생</p>
      <div className={guestProfileWrapper}>
        <img
          className={profileImage}
          src="https://avatars.githubusercontent.com/u/56749516?v=4"
          width={40}
          height={40}
          alt="프로필 이미지"
        />
      </div>
    </div>
  );
};

export default MenuTrigger;
