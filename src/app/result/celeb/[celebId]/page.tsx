import { getAllRestaurants } from '@/api/restaurant';
import RestaurantCard from '@/components/RestaurantCard';
import { CELEB } from '@/constants/celeb';
import Link from 'next/link';
import { use } from 'react';

const CelebResultPage = ({ params }: { params: { celebId: string } }) => {
  const allRestaurants = use(getAllRestaurants());
  const celebsRestaurants = allRestaurants.filter((restaurant) =>
    restaurant.celebs.some((celeb) => String(celeb.id) === params.celebId)
  );
  return (
    <div>
      <Link href='/'>
        <h4>
          ←{CELEB.find((celeb) => String(celeb.id) === params.celebId)?.name}{' '}
          추천 맛집
        </h4>
      </Link>
      <div className='w-full flex flex-col gap-2 p-4'>
        {celebsRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default CelebResultPage;
