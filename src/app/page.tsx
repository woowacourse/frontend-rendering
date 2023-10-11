"use client";

import RoadmapDetail from "@/components/roadmapDetailPage/roadmapDetail/RoadmapDetail";
import { Suspense } from "react";
import styled from "styled-components";

function HomePage() {
  return <RoadmapDetail />;
}
export default HomePage;
const Container = styled.div`
  padding: 0 2rem;
`;
