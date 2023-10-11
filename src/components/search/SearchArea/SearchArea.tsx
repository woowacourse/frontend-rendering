"use client";

import { DictionaryPlantNameSearchResult } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchBox from "@/components/search/SearchBox/SearchBox";
import { SearchBoxArea } from "./SearchArea.style";

const SearchArea = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const goDictionaryPlant = ({ id }: DictionaryPlantNameSearchResult) => {
    router.push("/dict/" + id);
  };

  return (
    <SearchBoxArea>
      <SearchBox
        value={searchValue}
        onChangeValue={setSearchValue}
        onResultClick={goDictionaryPlant}
      />
    </SearchBoxArea>
  );
};

export default SearchArea;
