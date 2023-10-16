'use client';

import { useState } from 'react';
import SearchBox from 'components/search/SearchBox';
import useDictionaryPlantNavigate from 'hooks/dictionaryPlant/useDictionaryPlantNavigate';

interface DictionarySearchBoxProps {
  initialSearch?: string;
}

const DictionarySearchBox = (props: DictionarySearchBoxProps) => {
  const { initialSearch = '' } = props;

  const [searchValue, setSearchValue] = useState(initialSearch);
  const { goToProperDictionaryPlantPage, goToDictionaryPlantDetailPage } =
    useDictionaryPlantNavigate();

  return (
    <SearchBox
      value={searchValue}
      onChangeValue={setSearchValue}
      onEnter={goToProperDictionaryPlantPage}
      onNextClick={goToProperDictionaryPlantPage}
      onResultClick={goToDictionaryPlantDetailPage}
    />
  );
};

export default DictionarySearchBox;
