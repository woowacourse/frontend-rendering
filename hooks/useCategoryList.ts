import { useQuery } from "@tanstack/react-query";

import { getGuestCategoryList } from "@/api/categoryList";

import { QUERY_KEY } from "@/constants/queryKey";

interface Category {
  id: number;
  name: string;
  isFavorite: boolean;
}

export const useCategoryList = (isLoggedIn: boolean) => {
  const { data, error, isLoading, isError } = useQuery<Category[]>(
    [QUERY_KEY.CATEGORIES, isLoggedIn],
    getGuestCategoryList,
    {
      cacheTime: 60 * 60 * 1000,
      staleTime: 60 * 60 * 1000,
      suspense: true,
    }
  );

  return { data, error, isLoading, isError };
};
