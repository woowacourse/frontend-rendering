import styles from './NavigationBar.module.css';

import type { PropsWithChildren } from 'react';

import Menu from './Menu/Menu';

export type BasePanelType = 'searchWindow' | 'stationList' | 'serverStationFilters' | null;

const NavigationBar = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

NavigationBar.Menu = Menu;

export default NavigationBar;
