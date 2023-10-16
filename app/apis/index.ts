import axios from 'axios';

// import { Tokens } from '@/types/auth/client';
// import { zipgoLocalStorage } from '@/utils/localStorage';

export const { BASE_URL } = {
  BASE_URL: 'https://step1--graceful-tapioca-ffe2ed.netlify.app',
};

// const tokens = zipgoLocalStorage.getTokens();

const defaultConfig = {
  baseURL: BASE_URL,
};

// export const createConfigWithAuth = (tokens: Tokens | null) =>
//   tokens
//     ? {
//         ...defaultConfig,
//         headers: {
//           Authorization: `Bearer ${tokens.accessToken}`,
//         },
//       }
//     : defaultConfig;

export const client = axios.create(defaultConfig);

// export const client = axios.create(createConfigWithAuth(tokens));
