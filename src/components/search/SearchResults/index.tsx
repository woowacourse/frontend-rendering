import SearchResultItem from 'components/search/SearchResultItem';
import { Title, ResultList, Wrapper, StyledLink } from './SearchResults.style';
import { URL_PATH } from 'constants/index';
import DictionaryPlantAPI from 'apis/dictionaryPlant';
import type { DictionaryPlantNameSearchResult } from 'types/dictionaryPlant';

interface SearchResultsProps {
  plantName: string;
}

const SearchResults = async (props: SearchResultsProps) => {
  const { plantName } = props;

  const response = await DictionaryPlantAPI.getSearch(plantName);
  const { data: searchResults }: { data: DictionaryPlantNameSearchResult[] } =
    await response.json();

  const samePlant = searchResults?.find(({ name }) => name === plantName);
  const similarPlants = searchResults?.filter(({ name }) => name !== plantName);

  const hasSimilarPlant = similarPlants && similarPlants.length > 0;

  if (!searchResults || (!samePlant && !hasSimilarPlant)) {
    return (
      <Wrapper>
        <Title>검색 결과가 없어요 😭</Title>
        <Title>
          이 식물을 추가할까요?&nbsp;&nbsp;&nbsp;
          <StyledLink href={URL_PATH.newDictionaryPlantRequest}>등록 신청하기</StyledLink>
        </Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {samePlant && (
        <>
          <Title>완전 똑같은 식물!!</Title>
          <ResultList>
            <li>
              <SearchResultItem
                id={samePlant.id}
                imageUrl={samePlant.image}
                name={samePlant.name}
              />
            </li>
          </ResultList>
        </>
      )}
      {!!similarPlants?.length && (
        <>
          <Title>비슷한 이름을 가진 식물</Title>
          <ResultList>
            {similarPlants.map(({ id, name, image }) => (
              <li key={id}>
                <SearchResultItem id={id} name={name} imageUrl={image} />
              </li>
            ))}
          </ResultList>
        </>
      )}
      <Title>
        찾는 식물이 없으신가요?&nbsp;&nbsp;&nbsp;
        <StyledLink href={URL_PATH.newDictionaryPlantRequest}>등록 신청하기</StyledLink>
      </Title>
    </Wrapper>
  );
};

export default SearchResults;
