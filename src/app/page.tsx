import { Suspense } from 'react';
import TripsHeader from '@/components/TripsHeader/TripsHeader';
import TripItemList from '@/components/TripItemList/TripItemList';
import TripItemListEmpty from '@/components/TripItemList/TripItemListEmpty';
import { getTrips } from '@/api/getTrips';
import { TripsData } from '@/types/trip';
import styles from './styles.module.css';
import Error from './error';

export default async function Home() {
  const trips: TripsData[] = await getTrips();

  return (
    <main className={styles.main}>
      <TripsHeader />
      <Suspense fallback={<div>loading...</div>}>
        {trips.length > 0 ? (
          <TripItemList trips={trips} />
        ) : (
          <TripItemListEmpty />
        )}
      </Suspense>
    </main>
  );
}
