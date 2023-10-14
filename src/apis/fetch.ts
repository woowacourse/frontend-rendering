import { ErrorResponse } from '@/types/response';

export const fetchApi = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    options
  );

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};
