import React from "react";
import PostTag from "../PostTag/PostTag";
import * as S from "./PostTagListStyled";

interface Props {
  tags: string[];
}

function PostTagList({ tags }: Props) {
  return (
    <S.List>
      {tags.map((tag) => (
        <PostTag key={tag} tag={tag} />
      ))}
    </S.List>
  );
}

export default PostTagList;
