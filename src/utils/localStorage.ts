export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
  return null;
};

export const setLocalStorage = <T>(key: string, value: T) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
