import { getAllRestaurants } from '@/api/restaurant';
import RestaurantCard from '@/components/RestaurantCard';
import { CELEB } from '@/constants/celeb';
import Link from 'next/link';
import { use } from 'react';

const ResultPage = ({ params }: { params: { theme: string; key: string } }) => {
  const allRestaurants = use(getAllRestaurants());

  const celebsRestaurants = allRestaurants.filter((restaurant) =>
    restaurant.celebs.some((celeb) => String(celeb.id) === params.key)
  );

  return (
    <div>
      <Link href='/'>
        {params.theme === 'celeb' && (
          <h4>
            ←{CELEB.find((celeb) => String(celeb.id) === params.key)?.name} 추천
            맛집
          </h4>
        )}
      </Link>
      <div className='w-full flex flex-col gap-2 p-4'>
        {params.theme === 'celeb' &&
          celebsRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default ResultPage;
