import { Suspense } from 'react';
import styles from './page.module.css';
import TripCreateForm from '@/components/TripCreateForm/TripCreateForm';

export default function Home() {
  return (
    <div className={styles.containerStyling}>
      <div className={styles.boxStyling}>
        <h3>여행을 기록해 보세요</h3>
        <Suspense fallback={<div>loading...</div>}>
          <TripCreateForm />
        </Suspense>
      </div>
      {/* <CreatePageImage
        aria-label="세계 랜드마크 이미지"
        className={styles.backgroundImageStyling}
      /> */}
    </div>
  );
}
