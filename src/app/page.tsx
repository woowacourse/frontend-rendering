import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import Calendar from '@/components/Calendar/Calendar';
import { fetchSchedules } from '@/apis/schedule';
import styles from './page.module.css';

export default async function Home() {
  const schedules = await fetchSchedules();

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.inner}>
        <NavigationBar />
        <main className={styles.main}>
          <Calendar schedules={schedules} />
        </main>
      </div>
    </div>
  );
}
