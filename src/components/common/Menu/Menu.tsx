import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, cloneElement } from 'react';
import MenuItem from './MenuItem';
import useDisplay from '@/hooks/useDisplay';
import useOutsideClick from '@/hooks/useOutsideClick';
import { layout, menuIconWrapper, menuList } from './menu.css';

export type MenuItem = {
  key: number;
  text: string;
  onClick: () => void;
  bottomSeparator?: boolean;
};

type Props = {
  trigger: ReactNode;
};

const Menu = ({ children, trigger }: PropsWithChildren<Props>) => {
  const { isShow, toggleShow, hide } = useDisplay();

  const ref = useOutsideClick<HTMLDivElement>(hide);

  return (
    <div className={layout} ref={ref}>
      <div className={menuIconWrapper} onClick={toggleShow}>
        {trigger}
      </div>
      {isShow && (
        <ul className={menuList}>
          {Children.map(children, (child) => {
            const item = child as ReactElement;
            return cloneElement(item, { hide });
          })}
        </ul>
      )}
    </div>
  );
};

export default Menu;

Menu.Item = MenuItem;
