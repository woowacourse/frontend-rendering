import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByCeleb } from '@/api/restaurant';
import RestaurantCard from '@/components/server/RestaurantCard';
import { CELEB } from '@/constants/celeb';
import { Metadata } from 'next';
import Link from 'next/link';
import { use } from 'react';

interface Props {
  params: { theme: string; celebId: string };
}

export async function generateMetadata({
  params: { celebId },
}: Props): Promise<Metadata> {
  return {
    title: `셀럽 페이지 | ${CELEB[Number(celebId) as keyof typeof CELEB]}`,
    description: `${
      CELEB[Number(celebId) as keyof typeof CELEB]
    }이(가) 다녀간 맛집 리스트를 확인해보세요!`,
    openGraph: {
      title: `${
        CELEB[Number(celebId) as keyof typeof CELEB]
      } 유튜브 맛집 리스트`,
      description: `${
        CELEB[Number(celebId) as keyof typeof CELEB]
      }이(가) 다녀간 맛집 리스트를 확인해보세요!`,
    },
  };
}

const ResultPage = ({ params: { celebId } }: Props) => {
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
