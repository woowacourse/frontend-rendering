import { getCelebs } from '@/api/celeb';
import CategoryList from '@/components/CategoryList';
import CelebProfile from '@/components/CelebProfile';
import RegionIcon from '@/components/RegionIcon';
import RestaurantCard from '@/components/RestaurantCard';
import { use } from 'react';

export default function Home() {
  const celebs = use(getCelebs());

  return (
    <main className='w-full flex flex-col gap-4'>
      <section>
        <h4>셀럽 BEST</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll'>
          {celebs.map((celeb) => (
            <CelebProfile key={celeb.id} celeb={celeb} />
          ))}
        </div>
      </section>

      <section>
        <h4>셀럽잇 추천 맛집!</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll'>
          <RestaurantCard flexCol />
          <RestaurantCard flexCol />
          <RestaurantCard flexCol />
        </div>
      </section>

      <section>
        <h4>어디로 가시나요?</h4>
        <div className='pl-4 pr-4 flex gap-4 overflow-x-scroll'>
          <RegionIcon />
          <RegionIcon />
          <RegionIcon />
          <RegionIcon />
        </div>
      </section>

      <section>
        <h4>카테고리</h4>
        <div className='w-full grid grid-cols-layout gap-4'>
          <CategoryList />
        </div>
      </section>
    </main>
  );
}
