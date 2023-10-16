export const fetchData = async <T>(url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("response is not ok");
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.error("Fail to fetch!");
  }
};
