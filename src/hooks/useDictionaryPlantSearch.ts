import type { DictionaryPlantNameSearchResult } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import DictionaryPlantAPI, {
  DICTIONARY_PLANT_URL,
} from "@/apis/dictionaryPlants";

const useDictionaryPlantSearch = (name: string) =>
  useQuery<DictionaryPlantNameSearchResult[]>({
    queryKey: [DICTIONARY_PLANT_URL, "search", name],
    queryFn: async () => {
      const response = await DictionaryPlantAPI.getSearch(name);
      const data = await response.json();
      return data;
    },

    placeholderData: keepPreviousData,

    enabled: name.trim() !== "",
    staleTime: Infinity,
  });

export default useDictionaryPlantSearch;
