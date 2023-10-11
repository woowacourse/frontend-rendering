import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByCeleb } from '@/api/restaurant';
import RestaurantCard from '@/components/server/RestaurantCard';
import { CELEB } from '@/constants/celeb';
import Link from 'next/link';
import { use } from 'react';

const ResultPage = ({
  params: { celebId },
}: {
  params: { theme: string; celebId: string };
}) => {
  const filteredRestaurants = use(
    getRestaurantsByCeleb(Number(celebId))
  ).content;

  return (
    <div>
      <Link href='/'>
        <h4>← {CELEB[Number(celebId) as keyof typeof CELEB]} 추천 맛집</h4>
      </Link>
      <div className='w-full flex flex-col gap-2 p-4'>
        {filteredRestaurants?.length &&
          filteredRestaurants?.map((restaurant: RestaurantData) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default ResultPage;
