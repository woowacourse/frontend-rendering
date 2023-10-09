"use server";

const fetchCafes = async (page: number) => {
  const apiUrl = `https://yozm.cafe/api/cafes/ranks?page=${page}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("에러:", error);
    return null;
  }
};

export default fetchCafes;
