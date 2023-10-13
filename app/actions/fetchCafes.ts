"use server";

const fetchCafes = async (page: number): Promise<Cafe[]> => {
  const apiUrl = `https://yozm.cafe/api/cafes/ranks?page=${page}`;
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchCafes;
