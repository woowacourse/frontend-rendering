'use client';

import LogoHorizontal from '@/assets/svg/logo-horizontal.svg';
import styles from './styles.module.css';
import Text from '../common/Text/Text';
import Button from '../common/Button/Button';

const Header = () => {
  const alertNotSupport = () => {
    () => alert('현재 지원하지 않는 서비스입니다.');
  };
  return (
    <header className={styles.headerStyling}>
      <div className={styles.outerFlexBox}>
        <div className={styles.innerFlexBox}>
          <LogoHorizontal
            className="getItemStyling"
            tabIndex={0}
            aria-label="행록 로고"
            onClick={alertNotSupport}
          />
          <Text
            className="getTapNavigateButtonStyling"
            tabIndex={1}
            aria-label="커뮤니티 페이지 이동 버튼"
            onClick={alertNotSupport}
          >
            커뮤니티
          </Text>
          <Text
            className="getTapNavigateButtonStyling"
            tabIndex={2}
            aria-label="내 여행 페이지 이동 버튼"
            onClick={alertNotSupport}
          >
            나의 여행
          </Text>
        </div>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={alertNotSupport}
        >
          로그인
        </Button>
      </div>
    </header>
  );
};

export default Header;
