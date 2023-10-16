import type { ComponentPropsWithoutRef } from 'react';

import './styles.module.css';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  size?: string;
}

const Text = ({ size = 'medium', children, ...attributes }: TextProps) => {
  return (
    <p className={`${size}`} {...attributes}>
      {children}
    </p>
  );
};

export default Text;
