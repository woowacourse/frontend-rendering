import styles from './ProfileButton.module.css';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const ProfileButton = () => {
  return (
    <div className={styles.container} onClick={(event) => event.stopPropagation()}>
      <UserCircleIcon width="2.8rem" stroke="#555" />
      <span className={styles.caption}>내정보</span>
    </div>
  );
};

export default ProfileButton;
