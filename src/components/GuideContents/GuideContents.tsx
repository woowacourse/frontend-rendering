import React from "react";
import * as S from "./GuideContentsStyled";

interface Props extends React.HTMLProps<HTMLDivElement> {
  contents: string;
  title: string;
}

const GuideContents = ({ contents, title, ...rest }: Props) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.TitleContainer aria-label={title}>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.Contents {...rest}>{contents}</S.Contents>
    </S.Container>
  );
};

export default GuideContents;
