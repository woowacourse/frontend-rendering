import Link from "next/link";
import styles from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={styles.container}>
      <div>ㅠ_ㅠ 이런!</div>
      <span>페이지를 불러오지 못했어요!</span>
      <Link href="/"> 메인 페이지로 돌아가기 </Link>
    </div>
  );
}

export default NotFound;
