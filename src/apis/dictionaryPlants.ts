import { BASE_URL } from "@/constants";

export const DICTIONARY_PLANT_URL = `${BASE_URL}/api/dictionary-plants`;

const getDetail = (id: number) => {
  return fetch(`${DICTIONARY_PLANT_URL}/${id}`, { method: "GET" });
};

const getSearch = (name: string) => {
  return fetch(`${DICTIONARY_PLANT_URL}?name=${name}`, { method: "GET" });
};

const DictionaryPlantAPI = {
  getDetail,
  getSearch,
};

export default DictionaryPlantAPI;
