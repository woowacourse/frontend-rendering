"use server";

const fetchCafes = async (page: number): Promise<Cafe[]> => {
  const apiUrl = `https://yozm.cafe/api/cafes/ranks?page=${page}`;
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP 에러! 상태 코드: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`API 에러: ${data.error}`);
    }

    return data;
  } catch (error) {
    console.error("에러가 발생했습니다:", error);
    throw error;
  }
};

export default fetchCafes;
