import Text from '../common/Text/Text';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.containerStyling}>
      <div>
        문의 : <a href="mailto:hanglog123@gmail.com">hanglog123@gmail.com</a>
      </div>
      <Text>©️ 2023 행록 All rights reserved</Text>
    </footer>
  );
};
export default Footer;
