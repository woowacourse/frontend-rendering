import S from "./RoadmapItem.module.css";
import { RoadmapDetailType } from "@/types/roadmap";

type RoadmapItemProps = {
  item: RoadmapDetailType;
};

const RoadmapItem = ({ item }: RoadmapItemProps) => {
  return (
    <div className={S.RoadmapItem} aria-label="로드맵 항목">
      <div>
        <div className={S.RoadmapTitle} aria-label="로드맵 제목">
          {item.roadmapTitle}
        </div>
        <div className={S.Description} aria-label="로드맵 소개">
          {item.introduction}
        </div>
      </div>
      <div className={S.ExtraHeader}>
        <span className={S.ExtraHeaderText}>카테고리</span>
        <span className={S.ExtraHeaderText}>난이도</span>
        <span className={S.ExtraHeaderText}>권장 소요기간</span>
      </div>
      <div className={S.ExtraHeader} aria-label="로드맵 속성">
        <div className={S.ExtraInfoBox}>{item.category.name}</div>
        <div className={S.Difficulty}>{item.difficulty}</div>
        <div className={S.RecommendedRoadmapPeriod}>
          <span className={S.RecommendedRoadmapPeriodNumber}>
            {item.recommendedRoadmapPeriod}
          </span>
          일
        </div>
      </div>
      <button className={S.LookButton}>자세히 보기</button>
      <div className={S.ItemFooter}>
        <div className={S.CreatedBy}>Created by {item.creator.name}</div>
        <div className={S.Tags}>
          {item.tags.map((tag, index) => {
            return <span key={index}># {tag.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
