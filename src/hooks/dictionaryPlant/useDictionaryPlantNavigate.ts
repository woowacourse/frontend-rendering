'use client';

import type { DictionaryPlantNameSearchResult } from 'types/dictionaryPlant';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const useDictionaryPlantNavigate = () => {
  const router = useRouter();

  const goToDictionaryPlantDetailPage = useCallback(
    ({ id }: DictionaryPlantNameSearchResult) => {
      router.push(`/dict/${id}`);
    },
    [router]
  );

  const goToProperDictionaryPlantPage = useCallback(
    (searchName: string, searchResults?: DictionaryPlantNameSearchResult[]) => {
      if (!searchName || !searchResults) return;

      const samePlant = searchResults.find(({ name }) => name === searchName);

      if (!samePlant) {
        router.push(`/dict?search=${searchName}`);
        return;
      }

      goToDictionaryPlantDetailPage(samePlant);
    },
    [router, goToDictionaryPlantDetailPage]
  );

  return { goToDictionaryPlantDetailPage, goToProperDictionaryPlantPage };
};

export default useDictionaryPlantNavigate;
