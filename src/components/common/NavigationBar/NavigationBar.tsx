import { SvgIcon } from '..';

import { NAVIGATION_MENU } from '@/constants';
import { colors } from '@/styles/theme';

import styles from './navigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {NAVIGATION_MENU.map(({ variant, name }) => {
          return (
            <li key={variant} className={styles.menuItem}>
              <SvgIcon variant={variant} color={colors.gray3} />
              <p className={styles.menuText}>{name}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
