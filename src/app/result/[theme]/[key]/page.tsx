import { RestaurantData, RestaurantListData } from '@/@types/api.types';
import {
  getRestaurantsByCeleb,
  getRestaurantsByAddress,
  getRestaurantsByCategory,
} from '@/api/restaurant';
import RestaurantCard from '@/components/RestaurantCard';
import { CELEB } from '@/constants/celeb';
import { RECOMMENDED_REGION } from '@/constants/recommendedRegion';
import Link from 'next/link';
import { use } from 'react';

const ResultPage = ({ params }: { params: { theme: string; key: string } }) => {
  let filteredRestaurants: RestaurantData[] = [];

  if (params.theme === 'celeb')
    filteredRestaurants = use(
      getRestaurantsByCeleb(Number(params.key))
    ).content;

  if (params.theme === 'region')
    filteredRestaurants = use(
      getRestaurantsByAddress(RECOMMENDED_REGION[params.key].code)
    );

  if (params.theme === 'category')
    filteredRestaurants = use(getRestaurantsByCategory(params.key)).content;

  return (
    <div>
      <Link href='/'>
        {params.theme === 'celeb' && <h4>← {CELEB[params.key]} 추천 맛집</h4>}
        {params.theme === 'region' && (
          <h4>
            ←
            {
              RECOMMENDED_REGION[params.key as keyof typeof RECOMMENDED_REGION]
                .name
            }
            맛집
          </h4>
        )}
        {params.theme === 'category' && <h4>←{decodeURI(params.key)}</h4>}
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
