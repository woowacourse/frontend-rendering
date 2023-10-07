interface ErrorResponse {
  code: number;
  message: string;
}

export const fetchApi = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    options
  );

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};
