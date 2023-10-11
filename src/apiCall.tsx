export async function getCelebs() {
  const res = await fetch(process.env.API_URL + "/api/celebs");
  const data = await res.json();
  return data;
}

export async function getPopularRestaurants() {
  const res = await fetch(process.env.API_URL + "/api/popularRestaurants");
  const data = await res.json();
  return data;
}
