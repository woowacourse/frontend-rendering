import type { PropsWithChildren } from 'react';
import { layout } from './button.css';

type Props = {
  onClick: () => void;
};

const Button = ({ children, onClick, ...props }: PropsWithChildren<Props>) => {
  return (
    <div className={layout} onClick={onClick} {...props}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
