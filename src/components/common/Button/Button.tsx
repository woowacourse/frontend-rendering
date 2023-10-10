import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { layout } from './button.css';

type Props = {
  onClick: () => void;
};

const Button = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<Props> & ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={layout} onClick={onClick} {...props}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
