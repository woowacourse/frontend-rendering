import React from 'react';
import * as styles from './avatar.css';
import Image from 'next/image';

interface Props extends React.HTMLProps<HTMLImageElement> {
  imageUrl: string;
  width: number;
  height: number;
}

const Avatar = ({ imageUrl, width, height, onClick }: Props) => {
  return (
    <div className={styles.imageWrapper}>
      <Image className={styles.image} src={imageUrl} width={width} height={height} alt="프로필" onClick={onClick} />
    </div>
  );
};

export default Avatar;
