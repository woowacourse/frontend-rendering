export const fetcher = async (...args: Parameters<typeof window.fetch>) => {
  const res = await fetch(...args);
  const body = await res.json();
  return body;
};
