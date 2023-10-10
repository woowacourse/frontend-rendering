import Modal from '../@common/Modal/Modal';
import KakaoLoginButton from '../KakaoLoginButton/KakaoLoginButton';
import styles from './loginModal.module.css';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const LoginModal = ({ isOpen, closeModal }: Props) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className={styles.container}>
        <h1 className={styles.title}>간편 로그인</h1>
        <div className={styles.content}>
          <KakaoLoginButton />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
