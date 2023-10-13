import React from "react";
import closeIcon from "@/assets/close-icon-red.svg";
import * as S from "./TagStyled";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Tag = ({ children, onClick }: Props) => {
  return (
    <S.TagWrapper>
      <S.Tag onClick={onClick} type="button">
        {`#${children}`}
        <S.CloseTagIcon src={closeIcon} />
      </S.Tag>
    </S.TagWrapper>
  );
};

export default Tag;
