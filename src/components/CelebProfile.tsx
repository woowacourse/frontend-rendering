import { Celeb } from '@/@types/api.types';
import Image from 'next/image';

interface CelebProfile {
  celeb: Celeb;
}

const CelebProfile = ({ celeb }: CelebProfile) => {
  const { name, profileImageUrl } = celeb;

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-16 h-16 rounded-full overflow-hidden relative'>
        <Image alt={name} fill={true} src={profileImageUrl} />
      </div>
      <span className='text-xs'>{name}</span>
    </div>
  );
};

export default CelebProfile;
