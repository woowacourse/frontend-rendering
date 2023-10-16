import styles from './navigationBar.module.css';

import { NAVIGATION_MENU } from '@/constants';
import SvgIcon from '../Svg/SvgIcon';

const NavigationBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navigationList}>
        {NAVIGATION_MENU.map(({ variant, name }) => {
          return (
            <li className={styles.navigationItem} key={variant}>
              <SvgIcon variant={variant} />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
