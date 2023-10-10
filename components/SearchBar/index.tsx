import { HTMLAttributes } from "react";

import { SEARCH_KEYWORD_MAX_LENGTH } from "@/constants/policy";
import { Size } from "@/types/style";

import searchIcon from "@/assets/search_black.svg";

import * as S from "./style";
import Image from "next/image";

interface SearchBarProps extends HTMLAttributes<HTMLInputElement> {
  size: Size | "free";
  isOpen?: boolean;
}

export default function SearchBar({ size, isOpen, ...rest }: SearchBarProps) {
  const handleSearchEvent = () => {
    alert("현재 지원하지 않는 기능입니다.");
  };

  return (
    <S.Form size={size} onSubmit={handleSearchEvent}>
      <S.Input
        maxLength={SEARCH_KEYWORD_MAX_LENGTH + 1}
        aria-label="게시글 제목 및 내용 검색창"
        type="search"
        value={""}
        onChange={handleSearchEvent}
        autoComplete="off"
        {...rest}
      />
      <S.Button type="submit">
        <Image src={searchIcon} alt="검색버튼" />
      </S.Button>
      {isOpen && (
        <S.ScreenReaderDirection aria-live="polite">
          검색창을 닫으려면 검색창 외부를 클릭해주세요.
        </S.ScreenReaderDirection>
      )}
    </S.Form>
  );
}
