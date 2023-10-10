import { Region } from "@/app/types";
import styles from "./styles.module.scss";
import { RECOMMENDED_REGION } from "@/constants";
import Link from "next/link";

function RegionList() {
  const REGION_LIST = Object.keys(RECOMMENDED_REGION) as Region[];

  return (
    <>
      {REGION_LIST.map((region: Region, index) => (
        <Link
          key={index}
          href={`/region/${region}`}
          className={styles.container}
          style={{
            backgroundImage: `url(https://www.celuveat.com/images-data/regions/${region}.jpeg)`,
          }}
        >
          <span className={styles.name}>
            {RECOMMENDED_REGION[region].name.map((item) => (
              <>
                {item}
                <br />
              </>
            ))}
          </span>
          <div className={styles.mask} />
        </Link>
      ))}
    </>
  );
}

export default RegionList;
