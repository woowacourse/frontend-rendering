import Celuveat from '@/assets/icon/celuveat.svg';

const Header = () => {
  return (
    <header className='w-full h-12 p-4 flex items-center gap-1'>
      <div className='w-8'>
        <Celuveat />
      </div>
      <span className='font-[600] text-xl'>celuveat</span>
    </header>
  );
};

export default Header;
