import type { LiHTMLAttributes, PropsWithChildren } from 'react';
import { layout, separator } from './menuItem.css';

type Props = {
  bottomSeparator?: boolean;
  hide?: () => void;
  onClick: () => void;
};

const MenuItem = ({
  bottomSeparator,
  children,
  onClick,
  hide,
  ...props
}: PropsWithChildren<Props> & LiHTMLAttributes<HTMLLIElement>) => {
  const handleClick = () => {
    if (hide) hide();
    onClick();
  };

  return (
    <>
      <li className={layout} onClick={handleClick} {...props}>
        {children}
      </li>
      {bottomSeparator && <div className={separator} />}
    </>
  );
};

export default MenuItem;
