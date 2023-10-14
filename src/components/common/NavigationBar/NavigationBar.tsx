'use client';

import { colors } from '@/styles/theme';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

import styles from './navigationBar.module.css';
import { NAVIGATION_MENU } from '@/constants';
import SvgIcon from '../SvgIcon';

const NavigationBar = () => {
  const currentPathname = usePathname();
  const isCurrentPathname = (pathname: string) => currentPathname === pathname;

  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {NAVIGATION_MENU.map(({ variant, name, path }) => {
          return (
            <li key={variant} className={styles.menuItem}>
              <SvgIcon
                variant={variant}
                color={isCurrentPathname(path) ? colors.gray5 : colors.gray3}
              />
              <p
                className={cx(styles.menuText, {
                  [styles.currentPath]: isCurrentPathname(path),
                })}
              >
                {name}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
