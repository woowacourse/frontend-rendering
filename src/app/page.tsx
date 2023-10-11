import Header from '@/components/Header/Header';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import CalendarPage from '@/components/CalendarPage/CalendarPage';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.inner}>
        <NavigationBar />
        {/* <main className={styles.main}><CalendarPage /></main> */}
      </div>
    </div>
  );
}
