import {
  CategoriesInfo,
  DIFFICULTY_ICON_NAME,
} from "@/constants/categoriyInfo";

export type CategoryType = {
  id: keyof typeof CategoriesInfo;
  name: string;
};

export type CreatorType = {
  id: number;
  name: string;
};

export type TagType = {
  id: number;
  name: string;
};

export type ContentType = {
  id: number;
  content: string;
  nodes: NodeType[];
};

export type RoadmapDetailType = {
  roadmapId: number;
  category: CategoryType;
  roadmapTitle: string;
  introduction: string;
  creator: CreatorType;
  content: ContentType;
  difficulty: keyof typeof DIFFICULTY_ICON_NAME;
  recommendedRoadmapPeriod: number;
  tags: TagType[];
};

export type NodeType = {
  id: number;
  title: string;
  description: string;
  imageUrls: string[];
};
