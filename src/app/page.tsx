import Link from "next/link";
import styles from "./page.module.scss";
import { getCelebs } from "./lib/getCelebs";
import Banner from "@/assets/banner.svg";
import type { Celeb } from "./types";
import popularRestaurants from "./data/popularRestaurants";
import ProfileImage from "@/components/ProfileImage";
import MiniRestaurantCard from "@/components/MiniRestaurantCard";
import RegionList from "@/components/RegionList";
import CategoryNavbar from "@/components/CategoryNavBar";
import { RESTAURANT_CATEGORY } from "@/constants";

export default async function Home() {
  const celebs: Celeb[] = await getCelebs();

  return (
    <main className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div>
          <h5 className={styles.title}>셀럽 BEST</h5>
          <div className={styles.iconBox}>
            {celebs.map((celeb) => {
              const { name, profileImageUrl, id } = celeb;
              return (
                <Link className={styles.celeb} key={id} href={`/celeb/${id}`}>
                  <ProfileImage name={name} imageUrl={profileImageUrl} />
                  <span>{name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h5 className={styles.title}>셀럽잇 추천 맛집!</h5>
          <div className={styles.popularRestaurantBox}>
            {popularRestaurants.map(({ celebs, ...restaurant }) => (
              <MiniRestaurantCard
                key={restaurant.id}
                celebs={celebs}
                restaurant={restaurant}
                flexColumn
                showWaterMark={false}
              />
            ))}
          </div>
        </div>

        <div>
          <h5 className={styles.title}>어디로 가시나요?</h5>
          <div className={styles.iconBox}>
            <RegionList />
          </div>
        </div>
        <div>
          <h5 className={styles.title}>카테고리</h5>
          <div className={styles.categoryBox}>
            <CategoryNavbar categories={RESTAURANT_CATEGORY} />
          </div>
        </div>
      </div>
    </main>
  );
}
