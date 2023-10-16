import { CategoriesInfo } from "@/constants/categories";
import { DIFFICULTY_ICON_NAME } from "@/constants/difficulties";

type CategoryType = {
  id: keyof typeof CategoriesInfo;
  name: string;
};

type CreatorType = {
  id: number;
  name: string;
};

type TagType = {
  id: number;
  name: string;
};

export type RoadmapDetailType = {
  roadmapId: number;
  category: CategoryType;
  roadmapTitle: string;
  introduction: string;
  creator: CreatorType;
  difficulty: keyof typeof DIFFICULTY_ICON_NAME;
  recommendedRoadmapPeriod: number;
  tags: TagType[];
};

export type RoadmapListRes = {
  responses: RoadmapDetailType[];
};
