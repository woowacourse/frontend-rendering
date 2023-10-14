import { CategoryResponse } from "@/types/category";
import CategoryToggle from "../CategoryToggle";

import * as S from "./style";
import { getFetch } from "@/utils/fetch";
import { transformCategoryListResponse } from "@/utils/transType";

const BASE_URL = process.env.NEXT_PUBLIC_ENV_VOTOGETHER_BASE_URL;

async function getCategoryList() {
  const categoryList = await getFetch<CategoryResponse[]>(
    `${BASE_URL}/categories/guest`,
    { cache: "no-store" }
  );

  return transformCategoryListResponse(categoryList);
}

const CategorySection = async () => {
  const categoryList = await getCategoryList();

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
