import { BASE_URL } from 'constants/index';

const checkSessionId = () => {
  return fetch(`${BASE_URL}/members/me`, {
    method: 'GET',
    credentials: 'include',
  });
};

const AuthAPI = {
  checkSessionId,
};

export default AuthAPI;
