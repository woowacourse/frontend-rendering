import Image from "next/image";
import styles from "./index.module.css";

const EmptyLinkPlaceholder = () => {
  return (
    <div className={styles.container}>
      <button
        className={styles.placeholderButton}
        aria-label="새로운 링크 등록하기"
      >
        <div className={styles.placeholderContainer}>
          <Image
            className={styles.linkEmptyImage}
            src="/feed-empty-image.png"
            alt="비어있는 링크 이미지"
            width={500}
            height={320}
          />
          <p className={styles.titleText}>등록된 링크가 없어요</p>
          <p className={styles.clickToAddText}>
            여기를 클릭해 새로운 링크를 등록해보세요
          </p>
        </div>
      </button>
    </div>
  );
};

export default EmptyLinkPlaceholder;
