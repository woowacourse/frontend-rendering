import type { ComponentPropsWithRef, ForwardedRef, ReactElement } from 'react';
import { forwardRef } from 'react';

import styles from './styles.module.css';

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: string;
  variant?: 'default' | 'text';
  size?: string;
  isError?: boolean;
  icon?: ReactElement;
  supportingText?: string;
}

const Input = (
  {
    variant = 'default',
    size = 'medium',
    isError = false,
    icon,
    supportingText,
    ...attributes
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className={styles.inputContainerStyling}>
      <div className={`${styles.inputWrapperStyling} ${size}`}>
        {icon}
        <input
          ref={ref}
          className={`${styles.getInputStyling} ${size}`}
          {...attributes}
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
