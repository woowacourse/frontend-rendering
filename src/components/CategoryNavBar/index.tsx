import styles from "./styles.module.scss";
import NavItem from "./NavItem";
import type { RestaurantCategory } from "@/app/types";
import Link from "next/link";

export const getShortCategoryName = (category: RestaurantCategory) => {
  if (category === "치킨, 피자, 햄버거") return "패스트푸드";
  if (category === "커피, 디저트, 빵") return "디저트";

  return category.split(", ").join(",");
};

interface Category {
  label: RestaurantCategory;
  icon: React.ReactNode;
}

interface CategoryProps {
  categories: Category[];
  includeAll?: boolean;
  isInteractive?: boolean;
}

function CategoryNavbar({
  categories,

  includeAll = true,
}: CategoryProps) {
  return (
    <ul className={styles.container} aria-hidden>
      {categories.map(({ icon, label }, index) => {
        if (!includeAll && label === "전체") return null;

        return (
          <Link
            href={`/category/${label}`}
            className={styles.navItemButton}
            key={index}
            aria-label={label}
            data-label={label}
            type="button"
          >
            <NavItem label={getShortCategoryName(label)} icon={icon} />
          </Link>
        );
      })}
    </ul>
  );
}

export default CategoryNavbar;
