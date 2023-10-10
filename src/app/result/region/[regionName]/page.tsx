import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByAddress } from '@/api/restaurant';
import RestaurantCard from '@/components/RestaurantCard';
import { RECOMMENDED_REGION } from '@/constants/recommendedRegion';
import Link from 'next/link';
import { use } from 'react';

const ResultPage = ({
  params: { regionName },
}: {
  params: { theme: string; regionName: string };
}) => {
  const restaurants = use(
    getRestaurantsByAddress(RECOMMENDED_REGION[regionName].code)
  );

  return (
    <div>
      <Link href='/'>
        <h4>
          ←
          {
            RECOMMENDED_REGION[regionName as keyof typeof RECOMMENDED_REGION]
              .name
          }
          맛집
        </h4>
      </Link>
      <div className='w-full flex flex-col gap-2 p-4'>
        {restaurants &&
          restaurants?.content.map((restaurant: RestaurantData) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default ResultPage;
