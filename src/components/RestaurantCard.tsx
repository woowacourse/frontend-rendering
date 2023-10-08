import Image from 'next/image';
import Star from '../assets/icon/star.svg';

const RestaurantCard = () => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='w-48 h-48'>
        <img
          className='w-full h-full object-cover rounded-lg overflow-hidden'
          src='https://www.celuveat.com/images-data/YnVubnlib3llb24tMQ.jpeg'
          alt='1'
        />
      </div>

      <div className='w-full flex flex-col'>
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
