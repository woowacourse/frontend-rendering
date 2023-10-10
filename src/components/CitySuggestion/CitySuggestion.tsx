import { useEffect, useRef } from 'react';

import { CityData } from '@/types/trip';
import MenuList from '../common/MenuList/MenuList';
import MenuItem from '../common/MenuItem/MenuItem';
import styles from './styles.module.css';
import Text from '../common/Text/Text';
import { useAutoScroll } from '@/hooks/useAutoscroll';
import { useCitySuggestion } from '@/hooks/useCitySuggestion';

interface SuggestionProps {
  cityData: CityData[];
  queryWord: string;
  onItemSelect: (city: CityData) => void;
}

const CitySuggestion = async ({
  cityData,
  queryWord,
  onItemSelect,
}: SuggestionProps) => {
  const { suggestions, focusedSuggestionIndex, isFocused, setNewSuggestions } =
    useCitySuggestion({
      cityData,
      onItemSelect,
    });
  const listRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const { scrollToFocusedItem } = useAutoScroll(listRef, itemRef);

  useEffect(() => {
    if (!queryWord) return;

    setNewSuggestions(queryWord);
  }, [queryWord]);

  useEffect(() => {
    scrollToFocusedItem();
  }, [focusedSuggestionIndex]);

  const handleItemClick = (city: CityData) => () => {
    onItemSelect(city);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {queryWord && (
        <MenuList className={styles.containerStyling} ref={listRef}>
          {suggestions.length ? (
            suggestions.map((city, index) => (
              <MenuItem
                key={city.id}
                onClick={handleItemClick(city)}
                className={`${styles.itemStyling} ${
                  isFocused(index) ? 'focused' : ''
                }`}
                ref={isFocused(index) ? itemRef : null}
              >
                {city.name}
              </MenuItem>
            ))
          ) : (
            <Text className={styles.emptyTextStyling}>
              검색어에 해당하는 도시가 없습니다.
            </Text>
          )}
        </MenuList>
      )}
    </>
  );
};

export default CitySuggestion;
