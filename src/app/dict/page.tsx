import NavBar from 'components/@common/NavBar';
import SearchResults from 'components/search/SearchResults';
import DictionarySearchBox from 'components/dictionaryPlant/DictionarySearchBox/DictionarySearchBox';
import { Title, Wrapper } from './DictionaryPlantSearch.style';

interface DictionarySearchProps {
  searchParams: { search: string };
}

const DictionarySearch = (props: DictionarySearchProps) => {
  const {
    searchParams: { search },
  } = props;

  return (
    <>
      <Wrapper>
        <DictionarySearchBox initialSearch={search} />
        <Title>&quot;{search}&quot; 검색 결과</Title>
        <SearchResults plantName={search} />
      </Wrapper>
      <NavBar />
    </>
  );
};

export default DictionarySearch;
