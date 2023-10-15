interface ApiError {
  errorCode: string;
  message: string;
}

export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, options);

  if (!response.ok) {
    const errorData: ApiError = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};
