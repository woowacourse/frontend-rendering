import { RestaurantData } from '@/@types/api.types';
import { getRestaurantsByAddress } from '@/api/restaurant';
import RestaurantCard from '@/components/server/RestaurantCard';
import { RECOMMENDED_REGION } from '@/constants/recommendedRegion';
import { Metadata } from 'next';
import Link from 'next/link';
import { use } from 'react';

interface Props {
  params: { regionName: string };
}

export async function generateMetadata({
  params: { regionName },
}: Props): Promise<Metadata> {
  return {
    title: `지역 맛집 페이지 | ${
      RECOMMENDED_REGION[regionName as keyof typeof RECOMMENDED_REGION].name
    }`,
    description: `${
      RECOMMENDED_REGION[regionName as keyof typeof RECOMMENDED_REGION].name
    } 맛집 리스트를 확인해보세요!`,
    openGraph: {
      title: `${
        RECOMMENDED_REGION[regionName as keyof typeof RECOMMENDED_REGION].name
      } 맛집 리스트`,
      description: `${
        RECOMMENDED_REGION[regionName as keyof typeof RECOMMENDED_REGION].name
      } 맛집 리스트를 확인해보세요!`,
    },
  };
}

const ResultPage = ({ params: { regionName } }: Props) => {
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
