import Link from 'next/link';
import NotFoundImage from '@/assets/image/404.svg';

export default function NotFound() {
  return (
    <div className='w-full flex flex-col items-center gap-2'>
      <div className='w-2/3'>
        <NotFoundImage />
      </div>
      <Link
        href='/'
        className='w-48 p-2 bg-orange-100 flex justify-center text-xl font-semibold'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
