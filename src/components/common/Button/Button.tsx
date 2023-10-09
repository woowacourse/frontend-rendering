import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import styles from './styles.module.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'small' | 'medium' | 'large';
  variant?: string;
}

const Button = (
  {
    size = 'medium',
    variant = 'primary',
    children,
    ...attributes
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={ref}
      className={`${styles.buttonStyling} ${size} ${variant}`}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
