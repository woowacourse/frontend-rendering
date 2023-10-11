"use client";

import type { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type SearchInputVariant = "small" | "large";

type SearchInputProps = ComponentPropsWithoutRef<"input"> & {
  variant?: SearchInputVariant;
};

const SearchInput = (props: SearchInputProps) => {
  const { variant = "small", ...restProps } = props;

  return <Input $variant={variant} {...restProps} />;
};

export default SearchInput;

const Input = styled.input<{ $variant: SearchInputVariant }>`
  width: 100%;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  outline: none;

  ${({ theme, $variant }) =>
    ({
      large: css`
        padding: ${theme.space[3]};
        font-size: ${theme.fontSize.lg};
      `,
      small: css`
        padding: ${theme.space[2]};
        font-size: ${theme.fontSize.base};
      `,
    }[$variant || "small"])}
`;
