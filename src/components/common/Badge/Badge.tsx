import type { ComponentPropsWithoutRef } from 'react';
import styles from './styles.module.css';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Badge의 비주얼 스타일
   *
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'outline';
}

const Badge = ({
  variant = 'default',
  children,
  ...attributes
}: BadgeProps) => {
  return (
    <span className={styles.badgeStyling} {...attributes}>
      {children}
    </span>
  );
};

export default Badge;
