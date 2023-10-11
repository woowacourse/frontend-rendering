import { useCategoryList } from "@/hooks/useCategoryList";

import CategoryToggle from "../CategoryToggle";

import * as S from "./style";
import { MOCK_GUEST_CATEGORY_LIST } from "@/mock/categoryList";
import { getFetch } from "@/utils/fetch";

const BASE_URL = "https://api.dev.votogether.com";

export interface CategoryResponse {
  id: number;
  name: string;
  isFavorite: boolean;
}

export const transformCategoryListResponse = (
  categoryList: CategoryResponse[]
) => {
  return categoryList.map((category) => ({
    id: category.id,
    name: category.name,
    isFavorite: category.isFavorite,
  }));
};

async function getCategoryList() {
  const categoryList = await getFetch<CategoryResponse[]>(
    `${BASE_URL}/categories/guest`,
    { cache: "no-store" }
  );

  return transformCategoryListResponse(categoryList);
}

const CategorySection = async () => {
  const isLoggedIn = false;

  const categoryList = await getCategoryList();
  // const categoryList = MOCK_GUEST_CATEGORY_LIST;

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
};

export default CategorySection;
