import { useState } from "react";
import { PiReadCvLogoFill } from "react-icons/pi";
import useCafeLikes from "../../hooks/useUser";
import useUser from "../../hooks/useUser";
import LikeButton from "../LikeButton/LikeButton";
import ShareButton from "../ShareButton/ShareButton";
import styles from "./styles.module.css";
import type { Cafe } from "../../types";

type CafeActionBarProps = {
  cafe: Cafe;
};

const CafeActionBar = (props: CafeActionBarProps) => {
  const { cafe } = props;
  const { isLiked, setLiked } = useCafeLikes(cafe);
  const { data: user } = useUser();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleLikeCountIncrease = () => {
    if (!user) {
      alert("로그인이 필요합니다!");
      return;
    }

    setLiked({ isLiked: !isLiked });
  };

  const handlePreventClickPropagation: React.MouseEventHandler<
    HTMLDivElement
  > = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={handlePreventClickPropagation}>
      <div className={styles.action}>
        <ShareButton url={`https://yozm.cafe/cafes/${cafe.id}`} />
        <LikeButton
          likeCount={cafe.likeCount + (isLiked ? 1 : 0)}
          active={isLiked}
          onChange={handleLikeCountIncrease}
        />
      </div>
      <button className={styles.action} onClick={() => setIsMenuOpened(true)}>
        <div className={styles.actionButtonContainer}>
          <div className={styles.actionButtonIcon}>
            <PiReadCvLogoFill />
          </div>
          메뉴
        </div>
      </button>
    </div>
  );
};

export default CafeActionBar;
