export const getApi = async <T>(url: string) => {
  const apiUrl = `${url}`;
  const headers: any = {
    'content-type': 'application/json',
  };

  const response = await fetch(apiUrl, { method: 'GET', headers });

  if (response.status >= 400) {
    throw new Error('[SERVER] GET 요청에 실패했습니다.');
  }

  const responseData: T = await response.json();
  return responseData;
};
