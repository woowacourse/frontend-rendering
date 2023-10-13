import React from "react";
import * as S from "./LabelStyled";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  colorTheme: "RED" | "WHITE" | "GRAY";
  fontSize?: string | number;
  fontWeight?: number;
}

const Label = ({ children, width, height, colorTheme, fontSize, fontWeight }: Props) => {
  return (
    <S.LabelWrapper>
      <S.Label
        $width={width}
        $height={height}
        $colorTheme={colorTheme}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
      >
        {children}
      </S.Label>
    </S.LabelWrapper>
  );
};

export default Label;
