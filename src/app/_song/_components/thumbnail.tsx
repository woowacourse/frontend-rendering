'use client';

import { SyntheticEvent } from 'react';
import styles from './thumbnail.module.css';
import Image from 'next/image';

type Size = 'md' | 'lg' | 'xl';

type ThumbnailProps = {
  src: string;
  size?: Size;
  borderRadius?: number;
};

const Thumbnail = ({ size = 'lg', borderRadius = 4, src, ...props }: ThumbnailProps) => {
  const insertDefaultJacket = ({ currentTarget }: SyntheticEvent<HTMLImageElement>) => {
    currentTarget.src = '/album-jacket-default.svg';
  };

  const SIZE_VARIANTS = {
    md: {
      width: 60,
      height: 60,
    },
    lg: {
      width: 70,
      height: 70,
    },
    xl: {
      width: 120,
      height: 120,
    },
  };

  return (
    <div className={styles.wrapper} style={{ borderRadius: `${borderRadius}px` }}>
      <Image
        width={`${SIZE_VARIANTS[size].width}`}
        height={`${SIZE_VARIANTS[size].height}`}
        src={src}
        alt="노래 앨범"
        onError={insertDefaultJacket}
        {...props}
      />
    </div>
  );
};

export default Thumbnail;
