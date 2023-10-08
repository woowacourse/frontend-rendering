import Image from 'next/image';
import Star from '../assets/icon/star.svg';

interface RestaurantCardProps {
  flexCol?: boolean;
}

const RestaurantCard = ({ flexCol = false }: RestaurantCardProps) => {
  return (
    <div className={`flex ${flexCol && 'flex-col items-center'} gap-2`}>
      <div className='w-44 h-44 overflow-hidden relative'>
        <Image
          className='rounded-lg object-cover'
          fill={true}
          src='https://www.celuveat.com/images-data/YnVubnlib3llb24tMQ.jpeg'
          alt='1'
        />
      </div>

      <div className={`flex flex-col ${flexCol ? 'w-full' : 'flex-1'}`}>
        <div className='w-full flex justify-between items-center'>
          <span className='font-semibold'>오띠젤리</span>
          <div className='flex items-center gap-1'>
            <Star />
            <span className='font-light text-sm text-gray-500'>3.00</span>
          </div>
        </div>
        <span className='font-light text-sm text-gray-500'>베이커리</span>
        <span className='text-sm'>서울시 용산구 녹사평대로</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
