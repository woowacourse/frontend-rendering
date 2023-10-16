import { formatDate } from '@/utils/formatter';
import type { TripsData } from '@/types/trip';
import styles from './styles.module.css';
import TripItem from '@/components/TripItem/TripItem';

interface TripsItemListProps {
  trips: TripsData[];
}

const TripsItemList = ({ trips }: TripsItemListProps) => {
  return (
    <section className={styles.containerStyling}>
      <ol className={styles.gridBoxStyling}>
        {trips.map((trip, index) => {
          return (
            <TripItem
              key={trip.id}
              id={trip.id}
              coverImage={trip.imageUrl}
              cityTags={trip.cities}
              itemName={trip.title}
              duration={`${formatDate(trip.startDate)} - ${formatDate(
                trip.endDate
              )}`}
              description={trip.description}
              index={index}
            />
          );
        })}
      </ol>
    </section>
  );
};


export default TripsItemList;
