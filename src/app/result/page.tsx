import RestaurantCard from '@/components/RestaurantCard';

const ResultPage = () => {
  return (
    <div>
      <h4>← 성시경 추천 맛집</h4>
      <div className='w-full flex flex-col gap-2 p-4'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default ResultPage;
