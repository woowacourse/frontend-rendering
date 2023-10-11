import * as S from "./RoadmapDetail.styles";

import Slider from "../../slider/Slider";
import NodeContent from "../nodeContent/NodeContent";
import ExtraInfo from "../extraInfo/ExtraInfo";

import { useEffect, useState } from "react";
import { fetchData } from "@/apis/fetcher";
import { RoadmapDetailType } from "@/myTypes/roadmap/internal";

const RoadmapDetail = () => {
  const [roadmapInfo, setRoadInfo] = useState<RoadmapDetailType>();

  useEffect(() => {
    async function get() {
      const roadmapData = await fetchData<RoadmapDetailType>(
        "roadmapDetail.json"
      );
      setRoadInfo(roadmapData);
    }

    get();
  }, []);

  if (roadmapInfo === undefined) return null;

  return (
    <S.RoadmapDetail>
      <S.RoadmapInfo>
        <S.Title>
          {roadmapInfo.roadmapTitle}
          <p>created by {roadmapInfo.creator.name}</p>
        </S.Title>
        <S.Tags>
          {roadmapInfo.tags.map((tag: any) => {
            return <li key={tag.id}>#{tag.name}</li>;
          })}
        </S.Tags>
        <S.Description>
          <S.Introduction>
            <div>소개글</div>
            <p>{roadmapInfo.introduction}</p>
          </S.Introduction>
          <S.Body>
            <div>본문</div>
            <p>
              {roadmapInfo.content.content === ""
                ? "로드맵에 대한 설명이 없어요🥲"
                : roadmapInfo.content.content}
            </p>
          </S.Body>
          <ExtraInfo roadmapInfo={roadmapInfo} />
        </S.Description>
      </S.RoadmapInfo>
      <S.Buttons>
        <S.Button>모임 생성하기</S.Button>
        <div />
        <S.Button>진행중인 모임보기</S.Button>
      </S.Buttons>
      <Slider>
        {roadmapInfo.content.nodes.map((node: any, index: number) => (
          <NodeContent key={node.id} node={node} index={index} />
        ))}
      </Slider>
    </S.RoadmapDetail>
  );
};

export default RoadmapDetail;
