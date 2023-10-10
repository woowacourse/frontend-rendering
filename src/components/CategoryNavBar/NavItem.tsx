import styles from "./navItem.module.scss";

interface NavItemProps {
  label?: string;
  icon: React.ReactNode;
  isShow?: boolean;
  isInteractive?: boolean;
}

function NavItem({ icon, label }: NavItemProps) {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      {label && (
        <div>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

export default NavItem;
