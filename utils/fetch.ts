export const getFetch = async <T>(
  url: string,
  { cache }: { cache: RequestCache | undefined }
): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache,
  });

  if (!response.ok) {
    const errorText = await response.text();
    const originError: Error = JSON.parse(errorText);
    const error = { status: response.status, message: originError.message };

    throw new Error(JSON.stringify(error));
  }

  const data = await response.json();

  return data;
};
