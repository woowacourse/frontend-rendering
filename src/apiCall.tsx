export async function getCelebs() {
  const res = await fetch("http://localhost:3000/api/celebs");
  const data = await res.json();
  return data;
}

export async function getPopularRestaurants() {
  const res = await fetch("http://localhost:3000/api/popularRestaurants");
  const data = await res.json();
  return data;
}
