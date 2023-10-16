import { useEffect, useState } from "react";
import { PiHeartFill } from "react-icons/pi";
import styles from "./styles.module.css";

type LikeButtonProps = {
  likeCount: number;
  active: boolean;
  onChange: () => void;
};

const LikeButton = (props: LikeButtonProps) => {
  const { likeCount, active, onChange } = props;

  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    setAnnounce(active ? "좋아요 취소되었습니다." : "좋아요가 추가되었습니다.");
    setTimeout(() => setAnnounce(""), 1000);
  }, [active]);

  const handleLikeClick = () => {
    onChange?.();
  };

  return (
    <div
      className={styles.container}
      aria-label="좋아요 버튼"
      tabIndex={0}
      role="button"
    >
      <PiHeartFill
        className={`${styles.heartIcon} ${
          active ? styles.heartIconActive : ""
        }`}
        onClick={handleLikeClick}
      />
      <span className={styles.likeCount}>{likeCount}</span>
      <div
        className={styles.announcement}
        aria-live="assertive"
        aria-atomic="true"
        aria-relevant="text"
      >
        {`${likeCount} ${announce}`}
      </div>
    </div>
  );
};

export default LikeButton;
