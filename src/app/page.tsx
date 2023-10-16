import RestaurantWishList from '@/components/RestaurantWishList';

export default async function Home() {
  const res = await fetch('https://frontend-rendering-imsd.vercel.app/api', {
    cache: 'force-cache',
  });

  const data = await res.json();

  return (
    <main>
      <RestaurantWishList restaurantData={data} />
    </main>
  );
}
