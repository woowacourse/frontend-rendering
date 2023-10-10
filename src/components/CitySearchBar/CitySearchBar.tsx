import type { FormEvent, KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import CloseIcon from '@/assets/svg/close-icon.svg';
import SearchPinIcon from '@/assets/svg/search-pin-icon.svg';
import Menu from '../common/Menu/Menu';
import Badge from '../common/Badge/Badge';
import Input from '../common/Input/Input';
import { useOverlay } from '@/hooks/useOverlay';
import { useDebounce } from '@/hooks/useDebounce';
import { CityData } from '@/types/trip';
import { useCityTags } from '@/hooks/useCityTags';
import CitySuggestion from '../CitySuggestion/CitySuggestion';
import { getCities } from '@/api/getCities';

interface CitySearchBarProps {
  initialCities?: CityData[];
  updateCityInfo: (cities: CityData[]) => void;
  required?: boolean;
}

const CitySearchBar = async ({
  initialCities,
  updateCityInfo,
}: CitySearchBarProps) => {
  const cityData: CityData[] = await getCities();
  const [queryWord, setQueryWord] = useState('');
  const { cityTags, addCityTag, deleteCityTag } = useCityTags(
    initialCities ?? []
  );
  const {
    isOpen: isSuggestionOpen,
    open: openSuggestion,
    close: closeSuggestion,
  } = useOverlay();
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQueryWord = useDebounce(queryWord, 150);

  useEffect(() => {
    updateCityInfo(cityTags);
  }, [cityTags]);

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const word = event.currentTarget.value;
    setQueryWord(word);

    openSuggestion();
  };

  const handleSuggestionClick = (selectedCity: CityData) => {
    addCityTag(selectedCity);
    resetAll();
  };

  const resetAll = () => {
    setQueryWord('');
    focusInput();
    closeSuggestion();
  };

  const handleDeleteButtonClick = (selectedCity: CityData) => () => {
    deleteCityTag(selectedCity);
    focusInput();
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputFocus = () => {
    if (debouncedQueryWord) {
      openSuggestion();
    }
  };

  const preventSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Menu closeMenu={closeSuggestion} className={styles.menuStyling}>
      <div className={styles.containerStyling} onClick={focusInput}>
        <label className={styles.labelStyling}>
          방문 도시
          <span className={styles.requiredStyling} aria-hidden>
            *
          </span>
        </label>
        <div className={styles.wrapperStyling}>
          <SearchPinIcon
            aria-label="지도표시 아이콘"
            className={styles.searchPinIconStyling}
          />
          <div className={styles.tagListStyling}>
            {cityTags.map((cityTag) => (
              <Badge key={cityTag.id} className={styles.badgeStyling}>
                {cityTag.name}
                <CloseIcon
                  aria-label="삭제 아이콘"
                  className={styles.closeIconStyling}
                  onClick={handleDeleteButtonClick(cityTag)}
                />
              </Badge>
            ))}
            <Input
              aria-label="방문 도시"
              placeholder={cityTags.length ? '' : '방문 도시를 입력해주세요'}
              value={queryWord}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onKeyDown={preventSubmit}
              ref={inputRef}
              className={styles.inputStyling}
            />
          </div>
        </div>
        {isSuggestionOpen && (
          <CitySuggestion
            cityData={cityData}
            queryWord={debouncedQueryWord}
            onItemSelect={handleSuggestionClick}
          />
        )}
      </div>
    </Menu>
  );
};

export default CitySearchBar;
