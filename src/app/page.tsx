import Image from 'next/image';
import styles from './page.module.css';
import LoginModalProvider from '@/components/LoginModalProvider/LoginModalProvider';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.introduce}>
          <div className={styles.absolute}>
            <Image src='./icons/blur-background.svg' alt='' fill />
          </div>
          <h1>
            동글에서 블로그 글을
            <br /> 간편하게 포스팅 하세요
          </h1>
          <p>블로그 포스팅뿐만 아니라 글 관리까지 한 번에</p>
          <LoginModalProvider size='big' />
          <Image
            src='/donggle-example.png'
            width={600}
            height={333}
            alt=''
            priority
          />
        </div>
      </section>
    </div>
  );
}
