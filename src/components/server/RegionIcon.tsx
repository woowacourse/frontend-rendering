import Image from 'next/image';

interface RegionIconProps {
  region: [string, { name: string[]; code: number[] }];
}

const RegionIcon = ({ region }: RegionIconProps) => {
  const [key, { name }] = region;

  return (
    <div className='flex-none w-16 h-16 bg-red-100 rounded-full overflow-hidden relative'>
      <Image
        className='bg-cover'
        fill={true}
        alt='성수'
        src={`https://www.celuveat.com/images-data/regions/${key}.jpeg`}
      />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black opacity-30' />
        <span className='text-sm text-white text-center z-10'>
          {name.map((item) => (
            <>
              {item}
              <br />
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

export default RegionIcon;
