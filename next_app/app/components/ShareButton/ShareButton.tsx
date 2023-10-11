import { FaShare } from "react-icons/fa";
import styles from "./styles.module.css";

type ShareButtonProps = {
  url: string;
};

const ShareButton = (props: ShareButtonProps) => {
  const { url } = props;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        alert("URL이 복사되었습니다!");
      },
      (error) => {
        console.error("URL 복사 실패:", error);
      }
    );
  };

  return (
    <div className={styles.container}>
      <FaShare className={styles.button} onClick={copyToClipboard} />
      <span className={styles.text}>공유</span>
    </div>
  );
};

export default ShareButton;
