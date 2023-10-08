import LoadingSvg from '@assets/loading.svg';
import Image from 'next/image';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <>
      <h2 className={styles.loadingMessage}>
        열심히 로딩하고 있어요<span>잠시만 기다려 주세요...</span>
      </h2>
      <div className={styles.container}>
        <Image src={LoadingSvg} alt="loading" />
      </div>
    </>
  );
};

export default Loading;
