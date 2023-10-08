'use client';

import { usePathname } from 'next/navigation';
import cx from 'classnames';

import { SvgIcon } from '..';

import { NAVIGATION_MENU } from '@/constants';
import { colors } from '@/styles/theme';

import styles from './navigationBar.module.css';

const NavigationBar = () => {
  const currentPathname = usePathname();
  const isCurrentPathname = (pathname: string) => currentPathname === pathname;

  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {NAVIGATION_MENU.map(({ variant, name, pathname }) => (
          <li key={variant} className={styles.menuItem}>
            <SvgIcon
              variant={variant}
              color={isCurrentPathname(pathname) ? colors.gray5 : colors.gray3}
            />
            <p
              className={cx(styles.menuText, {
                [styles.currentPath]: isCurrentPathname(pathname),
              })}
            >
              {name}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
