import { ButtonHTMLAttributes } from "react";

import { Size } from "@/types/style";

import * as S from "./style";

interface TagButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
}

const TagButton = ({ size, ...rest }: TagButtonProps) => {
  return (
    <S.Button $size={size} {...rest}>
      {rest.children}
    </S.Button>
  );
};

export default TagButton;
