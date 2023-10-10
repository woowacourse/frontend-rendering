import styles from "./style.module.scss";
import CommunityTripsItem from "../CommunityTripsItem/CommunityTripsItem";

import type { CommunityTripsData } from "../../types/trips";

const CommunityTripItemList = async () => {
  const { trips }: CommunityTripsData = await fetch(
    `https://frontend-rendering-eight.vercel.app/api/community-trips`,
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .catch(() => {
      throw new Error("여행 목록을 불러오지 못했습니다.");
    });

  return (
    <div>
      <section className={styles.containerStyling}>
        <ol className={styles.gridBoxStyling}>
          {trips.map((trip, index) => (
            <CommunityTripsItem key={trip.id} trip={trip} index={index} />
          ))}
        </ol>
      </section>
    </div>
  );
};

export default CommunityTripItemList;
