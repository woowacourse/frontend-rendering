import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const Button = (props: PropsWithChildren) => {
  const { children } = props;
  return <button className={styles.buttonStyle}>{children}</button>;
};

export default Button;
