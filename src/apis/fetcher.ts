export const BASE_URL = "https://dev.kirikiri.lol/api";

export const fetchData = async <T>(url: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);

    if (!response.ok) {
      throw new Error("response is not ok");
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error("Fail to fetch!");
  }
};
