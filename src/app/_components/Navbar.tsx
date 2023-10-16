import NavbarItem from "./NavbarItem";
import { NAV_ITEMS } from "./constant";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navBarWrapper}>
      {NAV_ITEMS.map((item) => {
        return (
          <NavbarItem
            key={item.key}
            target={item.key}
            label={item.label}
            icon={item.icon}
            focusIcon={item.focusIcon}
          />
        );
      })}
    </nav>
  );
}
