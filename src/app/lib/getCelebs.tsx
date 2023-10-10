export async function getCelebs() {
  const res = await fetch("https://d.api.celuveat.com/celebs");
  const data = await res.json();
  return data;
}
