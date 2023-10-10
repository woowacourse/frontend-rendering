import Image from 'next/image';
import styles from './kakaoLoginButton.module.css';

const KakaoLoginButton = () => {
  const redirectToKakao = () => {
    window.location.href = `https://donggle.blog/api/auth/login/kakao/redirect?redirect_uri=https://donggle.blog/oauth/login/kakao`;
  };

  return (
    <button
      className={styles.kakao}
      onClick={redirectToKakao}
      aria-label='카카오 로그인 화면으로 이동'
    >
      <Image src='./icons/kakao-symbol.svg' width={18} height={18} alt='' />
      <span className={styles.text}>카카오로 시작하기</span>
    </button>
  );
};

export default KakaoLoginButton;
