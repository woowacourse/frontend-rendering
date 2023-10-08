import RESTAURANT_CATEGORY from '@/constants/restaurantCategory';

const CategoryList = () => {
  return (
    <>
      {RESTAURANT_CATEGORY.map(({ icon, label }) => (
        <div
          className='flex flex-col justify-center items-center gap-2 w-20'
          key={label}>
          {icon}
          <span className='text-xs'>{label}</span>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
