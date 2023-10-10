import { css, styled } from 'styled-components';
import defaultAlbumJacket from '@/assets/icon/album-jacket-default.svg';
import type { ImgHTMLAttributes, SyntheticEvent } from 'react';

interface ThumbnailProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: Size;
  borderRadius?: number;
}

const Thumbnail = ({ size = 'lg', borderRadius = 4, src, ...props }: ThumbnailProps) => {
  const insertDefaultJacket = ({ currentTarget }: SyntheticEvent<HTMLImageElement>) => {
    currentTarget.src = defaultAlbumJacket;
  };

  return (
    <Wrapper $size={size} $borderRadius={borderRadius}>
      <img
        src={src}
        alt='노래 앨범'
        aria-hidden
        loading='lazy'
        onError={insertDefaultJacket}
        {...props}
      />
    </Wrapper>
  );
};

export default Thumbnail;

const Wrapper = styled.div<{ $size: Size; $borderRadius: number }>`
  overflow: hidden;
  ${({ $size }) => SIZE_VARIANTS[$size]};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
`;

const SIZE_VARIANTS = {
  md: css`
    width: 60px;
    height: 60px;
  `,
  lg: css`
    width: 70px;
    height: 70px;
  `,
  xl: css`
    width: 120px;
    height: 120px;
  `,
} as const;

type Size = keyof typeof SIZE_VARIANTS;
