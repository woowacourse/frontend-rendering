"use client";
import Image from "next/image";
import { useNavigator } from "../_hooks/useNavigator";
import { NavbarHighlightKeys } from "./constant";
import styles from "./navbarItem.module.css";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  label: string;
  icon: string;
  focusIcon: string;
  target: NavbarHighlightKeys;
}

function NavbarItem({ label, icon, focusIcon, target }: NavbarItemProps) {
  const { routingHandler } = useNavigator();

  let pathname = usePathname();
  if (pathname == "/") pathname = "/home";
  const isCurrentPath = pathname.includes(target);

  return (
    <div className={styles.iconWrapper} onClick={routingHandler[target]}>
      {isCurrentPath ? (
        <Image
          src={focusIcon}
          alt="Focus icon"
          width={24}
          height={24}
          priority
        />
      ) : (
        <Image src={icon} alt="default icon" width={24} height={24} priority />
      )}
      <span
        className={`${styles.navBarLabel} ${
          isCurrentPath ? styles.navBarLabelActive : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default NavbarItem;
