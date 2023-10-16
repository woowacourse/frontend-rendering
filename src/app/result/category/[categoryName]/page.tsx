import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByCategory } from '@/api/restaurant';
import RestaurantCard from '@/components/server/RestaurantCard';
import { Metadata } from 'next';
import Link from 'next/link';
import { use } from 'react';

interface Props {
  params: { categoryName: string };
}

export async function generateMetadata({
  params: { categoryName },
}: Props): Promise<Metadata> {
  return {
    title: `카테고리 페이지 | ${decodeURI(categoryName)}`,
    description: `${decodeURI(categoryName)} 맛집 리스트를 확인해보세요!`,
    openGraph: {
      title: `${decodeURI(categoryName)} 맛집 리스트`,
      description: `${decodeURI(categoryName)} 맛집 리스트를 확인해보세요!`,
    },
  };
}

const ResultPage = ({ params: { categoryName } }: Props) => {
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
