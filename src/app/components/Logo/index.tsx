import Image from 'next/image';
import styles from './index.module.css';

function Logo() {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/logo.svg"
        alt="핀 이미지"
        layout="intrinsic"
        width={176}
        height={52}
      />
    </div>
  );
}

export default Logo;
