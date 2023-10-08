import Image from 'next/image';

const CelebProfile = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-16 h-16 rounded-full overflow-hidden relative'>
        <Image
          alt='성시경'
          fill={true}
          src='https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj'
        />
      </div>
      <span className='text-xs'>성시경</span>
    </div>
  );
};

export default CelebProfile;
