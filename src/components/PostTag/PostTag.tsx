import React from "react";
import * as S from "./PostTagStyled";

interface Props {
  tag: string;
}

function PostTag({ tag }: Props) {
  return <S.TagName>#{tag}</S.TagName>;
}

export default PostTag;
