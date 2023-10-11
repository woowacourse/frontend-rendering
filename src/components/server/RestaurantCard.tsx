import Image from 'next/image';
import Star from '../assets/icon/star.svg';
import { RestaurantData } from '@/@types/api.types';

interface RestaurantCardProps {
  restaurant: RestaurantData;
  flexCol?: boolean;
}

const RestaurantCard = ({
  restaurant,
  flexCol = false,
}: RestaurantCardProps) => {
  const { name, category, roadAddress, images } = restaurant;

  return (
    <div className={`flex ${flexCol && 'flex-col items-center'} gap-2`}>
      <div className='w-44 h-44 overflow-hidden relative'>
        <Image
          className='rounded-lg object-cover'
          fill={true}
          src={`https://www.celuveat.com/images-data/webp/${images[0].name}.webp`}
          alt='1'
        />
      </div>

      <div className={`flex flex-col ${flexCol ? 'w-full' : 'flex-1'}`}>
        <div className='w-full flex justify-between items-center'>
          <span className='font-semibold'>{name}</span>
          <div className='flex items-center gap-1'>
            <Star />
            <span className='font-light text-sm text-gray-500'>3.00</span>
          </div>
        </div>
        <span className='font-light text-sm text-gray-500'>{category}</span>
        <span className='text-xs'>{roadAddress}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
