import React from "react";
import * as S from "./AvatarStyled";
interface Props extends React.HTMLProps<HTMLImageElement> {
  imageUrl: string;
}

const Avatar = ({ imageUrl, width, height, onClick }: Props) => {
  return (
    <S.ImageWrapper>
      <S.Image
        src={imageUrl}
        $width={width}
        $height={height}
        alt="프로필"
        onClick={onClick}
        $isPointer={!!onClick}
      />
    </S.ImageWrapper>
  );
};

export default Avatar;
