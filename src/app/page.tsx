import getWishListData from '@/api/user';
import RestaurantWishList from '@/components/RestaurantWishList';

export default async function Home() {
  const data = await getWishListData();

  return (
    <main>
      <RestaurantWishList restaurantData={data} />
    </main>
  );
}
