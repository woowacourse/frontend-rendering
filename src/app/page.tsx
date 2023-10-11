import styles from "./page.module.css";
import blurBackgroundSvg from "../../public/svg/blur-background.svg";
import donggleLogoSvg from "../../public/svg/donggle-logo.svg";
import donggleExamplePng from "../../public/image/donggle-example-png-2x.png";
import Image from "next/image";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={donggleLogoSvg} width={20} height={20} alt='동글 로고' />
          동글
        </div>
        <Link
          className={`${styles["login-link"]} ${styles["--small"]}`}
          href='/login-kakao'
        >
          로그인하기
        </Link>
      </header>
      <section className={styles.content}>
        <div className={styles.introduce}>
          <div className={styles.absolute}>
            <Image src={blurBackgroundSvg} alt='백그라운드 이미지' />
          </div>
          <h1 className={styles.title}>
            동글에서 블로그 글을
            <br /> 간편하게 포스팅 하세요
          </h1>
          <p className={styles.description}>
            블로그 포스팅뿐만 아니라 글 관리까지 한 번에
          </p>
          <Link
            className={`${styles["login-link"]} ${styles["--large"]}`}
            href='/login-kakao'
          >
            동글 시작하기
          </Link>
          <Image
            className={styles["donggle-example"]}
            src={donggleExamplePng}
            width={600}
            alt='동글 샘플'
          />
        </div>
      </section>
    </div>
  );
}
