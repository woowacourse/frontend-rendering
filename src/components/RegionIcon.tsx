import Image from 'next/image';

const RegionIcon = () => {
  return (
    <div className='w-16 h-16 bg-red-100 rounded-full overflow-hidden relative'>
      <Image
        className='w-full h-full bg-cover'
        fill={true}
        alt='성수'
        src='https://www.celuveat.com/images-data/regions/seongsu.jpeg'
      />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black opacity-30' />
        <span className='text-sm text-white z-10'>성수</span>
      </div>
    </div>
  );
};

export default RegionIcon;
