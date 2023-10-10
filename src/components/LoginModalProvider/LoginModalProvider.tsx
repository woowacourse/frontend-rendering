'use client';

import { useModal } from '@/hooks/@common/useModal';
import LoginModal from '../LoginModal/LoginModal';
import styles from './loginModalProvider.module.css';

type Props = {
  size: 'small' | 'big';
};

const LoginModalProvider = ({ size }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {size === 'small' ? (
        <button className={styles.loginSmall} onClick={openModal}>
          로그인하기
        </button>
      ) : (
        <button className={styles.loginLarge} onClick={openModal}>
          동글 시작하기
        </button>
      )}
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default LoginModalProvider;
