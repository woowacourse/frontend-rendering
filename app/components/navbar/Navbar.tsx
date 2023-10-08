import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../images/logo.svg";
import Button from "../button/Button";
import { FaRankingStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="요즘카페 로고" width={117} height={30} />
      </Link>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <button className={styles.iconButton}>
            <FaRankingStar />
          </button>
        </Link>
        <Link href="/">
          <button className={styles.iconButton}>
            <FaSearch />
          </button>
        </Link>
        <Link href="/">
          <button className={styles.iconButton}>
            <FaMapLocationDot />
          </button>
        </Link>
        <div className={styles.userButtonContainer}>
          <Button>로그인</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
