import styles from "./RoadmapList.module.css";
import RoadmapItem from "@/components/roadmap/roadmapItem/RoadmapItem";
import { RoadmapListRes } from "@/types/roadmap";

const RoadmapList = async () => {
  const { responses: roadmaps }: RoadmapListRes = await fetch(
    `${process.env.DEV_SERVER}/roadmaps?size=6&filterCond=LATEST`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <div className={styles.roadmapList}>
      {roadmaps.map((roadmap) => {
        return <RoadmapItem key={roadmap.roadmapId} item={roadmap} />;
      })}
    </div>
  );
};

export default RoadmapList;
