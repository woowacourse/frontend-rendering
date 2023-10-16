import { getFoodDetail } from '@/apis/food';
import { PropsWithChildren } from 'react';
import FoodDetail from './FoodDetail';

const FoodDetailProvider = async () => {
  const foodData = await getFoodDetail({ petFoodId: '39' });

  return (
    <>
      <FoodDetail foodData={foodData} />
    </>
  );
};

export default FoodDetailProvider;
