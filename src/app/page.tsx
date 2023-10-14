import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src='/svg/donggle-logo.svg'
            alt='동글 로고'
            width={20}
            height={20}
          />
          동글
        </div>
        <Link
          className={`${styles["login-link"]} ${styles["--small-link"]}`}
          href='/login-kakao'
        >
          로그인하기
        </Link>
      </header>
      <section className={styles.content}>
        <div className={styles.introduce}>
          <div className={styles.absolute}>
            <Image
              src='/svg/blur-background.svg'
              alt='백그라운드 이미지'
              width={1200}
              height={800}
            />
          </div>
          <h1 className={styles.title}>
            동글에서 블로그 글을
            <br /> 간편하게 포스팅 하세요
          </h1>
          <p className={styles.description}>
            블로그 포스팅뿐만 아니라 글 관리까지 한 번에
          </p>
          <Link
            className={`${styles["login-link"]} ${styles["--large-link"]}`}
            href='/login-kakao'
          >
            동글 시작하기
          </Link>
          <Image
            className={styles["donggle-example"]}
            src='/image/donggle-example-png-2x.png'
            alt='동글 샘플'
            width={600}
            height={333}
          />
        </div>
      </section>
    </div>
  );
}
