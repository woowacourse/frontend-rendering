import React from "react";

import * as S from "./style";

interface ProgressBarProps {
  percent: number;
  isSelected: boolean;
}

const ProgressBar = ({ percent, isSelected }: ProgressBarProps) => {
  return (
    <S.Container>
      <S.Bar $progress={percent} $isSelected={isSelected} />
    </S.Container>
  );
};

export default ProgressBar;
