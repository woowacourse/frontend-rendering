import { Topic } from '@/app/types/topic';
import styles from './index.module.css';
import Image from 'next/image';
import CustomImage from '../CustomImage';

const TopicCard = ({
  id,
  image,
  name,
  creator,
  updatedAt,
  pinCount,
  bookmarkCount,
}: Topic) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <CustomImage src={image} alt="이미지" width={140} height={140} />

        <div className={styles.info}>
          <div className={styles.name}>
            <span className={styles.topicName}>{name}</span>
          </div>

          <span className={styles.creator}>{creator}</span>

          <div className={styles.space} />
          <div className={styles.space} />

          <span className={styles.updateAt}>
            {updatedAt.split('T')[0].replaceAll('-', '.')} 업데이트
          </span>

          <div className={styles.space} />
          <div className={styles.space} />

          <div className={styles.flex}>
            <div className={styles['count-container']}>
              <Image
                src="/assets/smallTopicPin.svg"
                alt="핀 이미지"
                layout="intrinsic"
                width={11}
                height={16}
                priority
              />
              <div className={styles.space} />
              <span className={styles.count}>
                {pinCount > 999 ? '+999' : pinCount}개
              </span>
            </div>

            <div className={styles['count-container']}>
              <Image
                src="/assets/smallTopicStar.svg"
                alt="즐겨찾기 이미지"
                layout="intrinsic"
                width={18}
                height={16}
                priority
              />
              <div className={styles.space} />
              <span className={styles.count}>
                {bookmarkCount > 999 ? '+999' : bookmarkCount}명
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
