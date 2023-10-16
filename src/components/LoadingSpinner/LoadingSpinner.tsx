import Image from 'next/image';
import styled from './LoadingSpinner.module.css';

const CustomerLoadingSpinner = () => {
  return (
    <div className={styled.customLoadingSpinner}>
      <Image alt='loading' src='/images/c_loading.svg' width={25} height={25} />
    </div>
  );
};

export default CustomerLoadingSpinner;
