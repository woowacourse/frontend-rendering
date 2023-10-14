import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { SvgIconVariant } from '@/constants';
import { colors } from '@/styles/theme';

interface SvgIconProps extends ComponentPropsWithoutRef<'svg'> {
  variant: SvgIconVariant;
  color?: CSSProperties['color'];
  width?: number;
  height?: number;
}

const SvgIcon = ({
  variant,
  width = 24,
  height = 24,
  color = colors.gray4,
  ...props
}: SvgIconProps) => {
  return (
    <svg width={width} height={height} fill={color} {...props}>
      <use xlinkHref={`/sprite.svg#${variant}`} />
    </svg>
  );
};

export default SvgIcon;
