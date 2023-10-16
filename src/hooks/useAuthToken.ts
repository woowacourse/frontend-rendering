export const useAuthToken = () => {
  let authToken: string = '';
  if (typeof window !== 'undefined') authToken = localStorage.getItem('accessToken') || '';

  return { authToken };
};
