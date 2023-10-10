const ACCESS_TOKEN_LOCAL_STORAGE_KEY = 'ACCESS_TOKEN';

const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

export const validateResponse = async (response: Response) => {
  if (response.ok) return;

  try {
    const apiError = await response.json();

    if (
      apiError.errorCode.includes('JW') ||
      apiError.errorCode.includes('OA')
    ) {
      removeAccessToken();

      const authErrorCode = ['JW007', 'JW008', 'JW009', 'JW010'];
      throw new Error('데이터를 불러오지 못했어요');
    }
  } catch (error) {
    console.log(error);
    throw new Error('데이터를 불러오지 못했어요');
  }

  throw new Error('데이터를 불러오지 못했어요');
};

export const throwErrorBadRequest = () => {
  throw new Error('데이터를 불러오지 못했어요');
};
