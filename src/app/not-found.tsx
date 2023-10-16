import Link from 'next/link';
import { description, layout, pageState } from './not-found.css';

export default function NotFound() {
  return (
    <div className={layout}>
      <div className={pageState}>404</div>
      <div>
        <p className={description}>
          요청한 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소를 다시 한번 확인해주세요.
        </p>
      </div>
      <Link href="/" style={{ textDecoration: 'underline' }}>
        홈으로 이동하기
      </Link>
    </div>
  );
}
