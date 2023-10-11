import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";

import Banner from "@/assets/banner.svg";

import ProfileImage from "@/components/ProfileImage";
import MiniRestaurantCard from "@/components/MiniRestaurantCard";
import RegionList from "@/components/RegionList";
import CategoryNavbar from "@/components/CategoryNavBar";
import { RESTAURANT_CATEGORY } from "@/constants";

import type { Celeb, RestaurantData } from "./types";

export default async function Home() {
  const resCelebs = await fetch("http://127.0.0.1:3000/api/celebs");
  const celebs: Celeb[] = await resCelebs.json();
  const resPopularRestaurants = await fetch(
    "http://127.0.0.1:3000/api/popularRestaurants"
  );
  const popularRestaurants: RestaurantData[] =
    await resPopularRestaurants.json();

  if (!(celebs || popularRestaurants)) {
    notFound();
  }

  return (
    <main className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div>
          <h5 className={styles.title}>셀럽 BEST</h5>
          <div className={styles.iconBox}>
            {celebs?.map((celeb) => {
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
            {popularRestaurants?.map(({ celebs, ...restaurant }) => (
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
