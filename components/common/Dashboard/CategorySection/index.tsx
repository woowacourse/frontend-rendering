import CategoryToggle from '../CategoryToggle';

import * as S from './style';
import { getGuestCategoryList } from '@api/categoryList';

export default async function CategorySection() {
  const categoryList = await getGuestCategoryList();

  const categoryListFallback = categoryList ?? [];

  const allCategory = categoryListFallback.filter(
    (category) => category.isFavorite === false
  );

  return (
    <>
      <S.SelectedStateWrapper>
        <S.Circle />
        <S.SelectedStateText>전체</S.SelectedStateText>
      </S.SelectedStateWrapper>
      <S.ContentContainer>
        <S.CategoryToggleContainer>
          <CategoryToggle
            title="카테고리 모아보기"
            categoryList={allCategory}
          />
        </S.CategoryToggleContainer>
      </S.ContentContainer>
    </>
  );
}
