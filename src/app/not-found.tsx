import classNames from "classnames/bind";
import styles from "./not-found.module.css";

const cx = classNames.bind(styles);

export default function Page() {
  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>🥲 404 - 페이지를 찾을 수 없습니다.</h1>
    </div>
  );
}
