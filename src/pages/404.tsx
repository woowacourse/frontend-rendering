import styled from '@/styles/404.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styled.container}>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <h3 className={styled.heading}>404</h3>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <Link href='/admin'>홈으로 돌아가기</Link>
    </div>
  );
}
