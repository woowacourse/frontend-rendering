import Image from 'next/image';

import type { CityData } from '@/types/trip';

import DefaultThumbnail from '@/assets/png/trip_default-thumbnail.png';
import styles from './styles.module.css';
import Text from '@/components/common/Text/Text';
import Badge from '@/components/common/Badge/Badge';

interface TripsItemProps {
  id: number;
  coverImage: string | null;
  cityTags: CityData[];
  itemName: string;
  duration: string;
  index: number;
  description?: string | null;
}

const TripsItem = ({
  coverImage,
  cityTags,
  itemName,
  duration,
  description,
  index,
}: TripsItemProps) => {
  return (
    <li
      className={styles.boxStyling}
      tabIndex={index + 5}
      aria-label={`${index + 1}번째 trip, ${itemName}`}
    >
      <Image
        src={coverImage ?? DefaultThumbnail}
        width={undefined}
        height={undefined}
        className={styles.imageStyling}
        alt={`${itemName} 대표 이미지`}
      />
      <div className={styles.badgeBoxStyling}>
        {cityTags.map((cityTag) => {
          return <Badge key={cityTag.id}>{cityTag.name}</Badge>;
        })}
      </div>
      <Text size="large" className={styles.nameStyling}>
        {itemName}
      </Text>
      <Text size="medium">{duration}</Text>
      <Text size="small" className={styles.descriptionStyling}>
        {description}
      </Text>
    </li>
  );
};

export default TripsItem;
