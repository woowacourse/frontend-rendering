import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import styles from './styles.module.css';

type MenuListProps = ComponentPropsWithRef<'ul'>;

const MenuList = (
  { children, ...attributes }: MenuListProps,
  ref: ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul className={styles.menuListStyling} ref={ref} {...attributes}>
      {children}
    </ul>
  );
};

export default forwardRef(MenuList);
