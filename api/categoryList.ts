import { getSSRFetch } from '@utils/fetch';

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

const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_URL ?? '';

export const getGuestCategoryList = async () => {
  const categoryList = await getSSRFetch<CategoryResponse[]>(
    `${BASE_URL}/categories/guest`
  );

  return transformCategoryListResponse(categoryList);
};
