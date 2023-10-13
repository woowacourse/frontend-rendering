"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";
import Spinner from "../spinner/Spinner";
import fetchCafes from "@/app/actions/fetchCafes";
import CafeRank from "../cafeRank/CafeRank";

const LoadMore = () => {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreCafes = async () => {
    const nextPage = pagesLoaded + 1;

    if (nextPage <= 3) {
      const newCafes = (await fetchCafes(nextPage)) ?? [];
      setCafes((prevCafes: Cafe[]) => [...prevCafes, ...newCafes]);
      setPagesLoaded(nextPage);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreCafes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <CafeRank cafes={cafes} />
      {pagesLoaded < 3 && (
        <div className={styles.container} ref={ref}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default LoadMore;
