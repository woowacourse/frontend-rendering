export interface ErrorResponse {
  code: number;
  message: string;
}

const fetcher = async (url: string, method: string, body?: unknown) => {
  const headers: Record<string, string> = {
    'Content-type': 'application/json',
  };

  const options: RequestInit = {
    method,
    headers,
    next: { revalidate: 60 * 60 },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, options);

  if (!response.ok) {
    const errorResponse: ErrorResponse = await response.json();

    if (response.status >= 500) {
      throw new Error(errorResponse.message);
    }

    if (response.status === 401) {
      throw new Error(errorResponse.message);
    }

    throw new Error(errorResponse.message);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) return response;

  return response.json();
};

export default fetcher;
