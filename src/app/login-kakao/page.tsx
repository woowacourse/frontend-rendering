import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>kakao 로그인 페이지</h1>
      <Link className={`${styles["login-link"]} ${styles["--small"]}`} href='/'>
        돌아가기
      </Link>
    </div>
  );
}
