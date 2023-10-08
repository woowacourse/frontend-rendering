import Celuveat from '../assets/icon/celuveat.svg';

const Header = () => {
  return (
    <div className='w-full h-12 p-4 flex items-center'>
      <div className='w-8'>
        <Celuveat />
      </div>
      <span className='font-bold text-lg'>celuveat</span>
    </div>
  );
};

export default Header;
