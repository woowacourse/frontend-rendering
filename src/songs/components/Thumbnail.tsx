import { SyntheticEvent } from 'react';
import defaultAlbumJacket from '@/assets/default-jacket.svg';
import styles from './Thumbnail.module.css';

interface ThumbnailProps {
  src: string;
  size?: Size;
  borderRadius?: number;
}

const Thumbnail = ({ size = 'lg', borderRadius = 4, src, ...props }: ThumbnailProps) => {
  const insertDefaultJacket = ({ currentTarget }: SyntheticEvent<HTMLImageElement>) => {
    currentTarget.src = defaultAlbumJacket;
  };

  return (
    <div
      className={`${styles.wrapper} ${styles[size]}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      <img
        src={src}
        alt="노래 앨범"
        aria-hidden
        loading="lazy"
        onError={insertDefaultJacket}
        {...props}
      />
    </div>
  );
};

export default Thumbnail;

type Size = 'md' | 'lg' | 'xl';
