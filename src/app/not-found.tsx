import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 Error</h1>
      <div>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
      </div>
      <Link href="/">돌아가기</Link>
    </div>
  );
}
