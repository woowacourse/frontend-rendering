import styles from './LayoutContainer.module.css';
import { PropsWithChildren } from 'react';

const LayoutContainer = ({ children }: PropsWithChildren) => {
  return <main className={styles.layoutContainer}>{children}</main>;
};

export default LayoutContainer;
