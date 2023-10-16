"use client";

import styled from "styled-components";
import Header from "@/components/common/Header/Header";
import LandingMainSection from "@/components/landing/LandingMainSection/LandingMainSection";
import GuideSection from "@/components/landing/GuideSection/GuideSection";
import StartSection from "@/components/landing/StartSection/StartSection";
import Footer from "@/components/common/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <LandingContents>
        <LandingMainSection />
        <GuideSection />
        <StartSection />
      </LandingContents>
      <Footer />
    </>
  );
}

const LandingContents = styled.div`
  width: 90%;

  margin: 0 auto;
`;
