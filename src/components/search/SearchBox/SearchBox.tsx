"use client";

import type { DictionaryPlantNameSearchResult } from "@/types";
import Image from "@/components/common/Image/Image";
import {
  InputBox,
  ResultItem,
  ResultList,
  Wrapper,
  Name,
  Input,
  ResultMessage,
  StyledLink,
  Backdrop,
  ResultDropdown,
} from "./SearchBox.style";
import useDictionaryPlantSearch from "@/hooks/useDictionaryPlantSearch";
import useDebounce from "@/hooks/useDebounce";
import useToggle from "@/hooks/useToggle";
import { MESSAGE, URL_PATH } from "@/constants";

interface SearchBoxProps {
  value: string;
  height?: `${number}px`;
  fontSize?: `${number}rem`;
  showResultSize?: number;
  onChangeValue: (value: string) => void;
  onResultClick?: (searchResult: DictionaryPlantNameSearchResult) => void;
}

const SearchBox = (props: SearchBoxProps) => {
  const {
    value,
    height = "48px",
    fontSize = "1.6rem",
    showResultSize = 4,
    onChangeValue,
    onResultClick,
  } = props;

  const queryName = useDebounce<string>(value, 200);
  const { data: searchResults } = useDictionaryPlantSearch(queryName);
  const { isOn, on: open, off: close } = useToggle();

  const isOpen = value !== "" && isOn;
  const numberHeight = Number(height.slice(0, -2));

  const handleSearchNameChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChangeValue(value);
    open();
  };

  const handleResultClick =
    (searchResult: DictionaryPlantNameSearchResult) => () => {
      onResultClick?.(searchResult);
      onChangeValue(searchResult.name);
      close();
    };

  const handleFocus = () => {
    open();
  };

  return (
    <Wrapper $fontSize={fontSize}>
      <InputBox $openBottom={isOpen} $height={height}>
        <Input
          type="text"
          value={value}
          onChange={handleSearchNameChange}
          onFocus={handleFocus}
          $height={height}
        />
      </InputBox>
      {isOpen && (
        <>
          <Backdrop onClick={close} />
          <ResultDropdown $height={height}>
            <ResultList $maxHeight={`calc(${height} * ${showResultSize})`}>
              {searchResults?.map(({ id, name, image }) => (
                <ResultItem
                  key={id}
                  onClick={handleResultClick({ id, name, image })}
                  $height={height}
                >
                  <Image
                    alt={name}
                    src={image}
                    type="circle"
                    size={Math.round(numberHeight * (2 / 3))}
                  />
                  <Name>{name}</Name>
                </ResultItem>
              ))}
            </ResultList>
            <ResultMessage>
              {searchResults?.length
                ? "찾는 식물이 없으신가요?"
                : MESSAGE.noSearchResult}
              <StyledLink href={URL_PATH.newDictionaryPlantRequest}>
                등록 신청하기
              </StyledLink>
            </ResultMessage>
          </ResultDropdown>
        </>
      )}
    </Wrapper>
  );
};

export default SearchBox;
