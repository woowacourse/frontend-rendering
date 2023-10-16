import React from 'react';
import * as S from './Avatar.style';

interface Props extends React.HTMLProps<HTMLImageElement> {
  imageUrl: string;
}

const Avatar = ({ imageUrl, width, height }: Props) => {
  return (
    <S.ImageWrapper>
      <S.Image src={imageUrl} $width={width} $height={height} alt="프로필" />
    </S.ImageWrapper>
  );
};

export default Avatar;
