import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import Calendar from '@/components/Calendar/Calendar';
import styles from './page.module.css';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.inner}>
        <NavigationBar />
        <main className={styles.main}>
          <Suspense fallback={<div>loading...</div>}>
            <Calendar />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
