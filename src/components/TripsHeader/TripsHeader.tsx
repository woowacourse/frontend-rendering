import TripsHeaderImage from '@/assets/svg/TripsHeader.svg';
import styles from './styles.module.css';

const TripsHeader = () => {
  return (
    <section className={styles.containerStyling}>
      <h3 className={styles.headingStyling}>첵스의 여행</h3>
      <TripsHeaderImage className={styles.imageStyling} />
    </section>
  );
};

export default TripsHeader;
