import RESTAURANT_CATEGORY from '@/constants/restaurantCategory';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <>
      {RESTAURANT_CATEGORY.map(({ icon, label }) => (
        <Link key={label} href={`/result/category/${label}`}>
          <div className='flex flex-col justify-center items-center gap-2 w-20'>
            {icon}
            <span className='text-xs'>{label}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CategoryList;
