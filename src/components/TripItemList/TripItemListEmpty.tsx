import styles from './styles.module.css';
import Text from '@/components/common/Text/Text';
import Button from '@/components/common/Button/Button';

const TripItemListEmpty = () => {
  return (
    <section className={`${styles.emptyBoxStyling} ${styles.containerStyling}`}>
      <h3 className={styles.headingStyling}>아직 기록된 여행이 없습니다!</h3>
      <Text className={styles.textStyling}>
        여행 가방에 쌓인 먼지를 털어내고 여행을 기록해 보세요.
      </Text>
      <Button variant="primary" onClick={() => alert('지원하지 않습니다')}>
        여행 기록하기
      </Button>
    </section>
  );
};

export default TripItemListEmpty;
