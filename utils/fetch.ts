const headers = {
  "Content-Type": "application/json",
};

export const makeFetchHeaders = () => {
  const accessToken = undefined;

  if (!accessToken) {
    return headers;
  }

  return {
    ...headers,
    Authorization: `Bearer ${accessToken}`,
  };
};

const makeFetchMultiHeaders = () => {
  const accessToken = undefined;

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

export const getFetch = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: "GET",
    headers: makeFetchHeaders(),
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

export const postFetch = async <T>(url: string, body: T) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: makeFetchHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};

export const putFetch = async <T>(url: string, body: T) => {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: makeFetchHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};

export const patchFetch = async <T>(url: string, body?: T) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: makeFetchHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};

export const deleteFetch = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: makeFetchHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};

export const multiPostFetch = async (url: string, body: FormData) => {
  const response = await fetch(url, {
    method: "POST",
    body,
    headers: makeFetchMultiHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};

export const multiPutFetch = async (url: string, body: FormData) => {
  const response = await fetch(url, {
    method: "PUT",
    body,
    headers: makeFetchMultiHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error: Error = JSON.parse(errorText);

    throw new Error(error.message);
  }
};
