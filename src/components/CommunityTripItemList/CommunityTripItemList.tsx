import styles from "./style.module.scss";
import CommunityTripsItem from "../CommunityTripsItem/CommunityTripsItem";

const { NEXT_PUBLIC_BASE_URL } = process.env;

import type { CommunityTripsData } from "../../types/trips";

const CommunityTripItemList = async () => {
  // const { trips }: CommunityTripsData = await fetch(
  //   `${NEXT_PUBLIC_BASE_URL}/api/community-trips`,
  //   {
  //     cache: "force-cache",
  //   }
  // )
  //   .then((res) => res.json())
  //   .catch(() => {
  //     throw new Error("여행 목록을 불러오지 못했습니다.");
  //   });

  return (
    <div>
      {/* <section className={styles.containerStyling}>
        <ol className={styles.gridBoxStyling}>
          {trips.map((trip, index) => (
            <CommunityTripsItem key={trip.id} trip={trip} index={index} />
          ))}
        </ol>
      </section> */}
    </div>
  );
};

export default CommunityTripItemList;
