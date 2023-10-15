// export const getRestaurantWishList = async () => {
//   const response = await apiUserClient.get('/restaurants/like');
//   return response.data;
// };

export default async function getWishListData() {
  const res = await import('../app/restaurants/like/route');

  return await (await res.GET()).json();
}
