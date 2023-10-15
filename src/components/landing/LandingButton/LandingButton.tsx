import Button from "@/components/common/Button/Button";
import styles from "./LandingButton.module.css";

const LandingButton = () => {
  return (
    <div className={styles.container}>
      <Button>
        하루스터디 시작하기
      </Button>
    </div>
  );
};

export default LandingButton;
