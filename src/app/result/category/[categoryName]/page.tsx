import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByCategory } from '@/api/restaurant';
import RestaurantCard from '@/components/RestaurantCard';
import Link from 'next/link';
import { use } from 'react';

const ResultPage = ({
  params: { categoryName },
}: {
  params: { categoryName: string };
}) => {
  const Restaurants = use(getRestaurantsByCategory(categoryName)).content;

  return (
    <div>
      <Link href='/'>
        <h4>←{decodeURI(categoryName)}</h4>
      </Link>
      <div className='w-full flex flex-col gap-2 p-4'>
        {Restaurants?.length &&
          Restaurants?.map((restaurant: RestaurantData) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default ResultPage;
