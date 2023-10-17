import RestaurantWishList from '@/components/RestaurantWishList';

export default async function Home() {
  const res = await fetch('https://json-server-4140.onrender.com/restaurants', {
    next: { revalidate: 10 },
  });

  const data = await res.json();

  return (
    <main>
      <RestaurantWishList restaurantData={data} />
    </main>
  );
}
