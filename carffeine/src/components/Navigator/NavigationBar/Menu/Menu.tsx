import styles from './Menu.module.css';

import { AdjustmentsHorizontalIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';

import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

import Image from 'next/image';

import CarffeineLogo from '@assets/carffeine-logo.svg';

const Menu = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => location.reload()}>
        <Image width={30} height={30} src={CarffeineLogo} alt="logo" />
      </button>

      <button
        className={styles.button}
        aria-label="주변 충전소 목록 열기"
        onClick={() => alert('충전소 목록 기능은 아직 준비중입니다!')}
      >
        <Bars3Icon width="28px" stroke="#555" />
        <span className={styles.caption}>목록</span>
      </button>

      <button
        className={styles.button}
        aria-label="필터링 메뉴 열기"
        onClick={() => alert('필터링 메뉴는 아직 준비중입니다!')}
      >
        <AdjustmentsHorizontalIcon width="28px" stroke="#555" />
        <span className={styles.caption}>필터</span>
      </button>

      <button
        className={styles.button}
        aria-label="로그인 하기"
        onClick={() => alert('로그인 기능은 아직 준비중입니다!')}
      >
        <UserCircleIcon width="28px" stroke="#555" />
        <span className={styles.caption}>내정보</span>
      </button>

      <button
        className={styles.button}
        aria-label="충전소 리스트 열기"
        onClick={() => alert('충전소 리스트 기능은 아직 준비중입니다!')}
      >
        <Bars3Icon width="28px" stroke="#555" />
        <span className={styles.caption}>목록</span>
      </button>

      <button
        className={styles.button}
        onClick={() => {
          if (confirm('설문조사에 참여하시겠습니까?')) {
            window.open('https://forms.gle/YQKx1zchUifjUJ396');
          }
        }}
      >
        <HiOutlineChatBubbleOvalLeftEllipsis size="28px" stroke="#555" />
        <span className={styles.caption}>피드백</span>
      </button>
    </div>
  );
};

export default Menu;
