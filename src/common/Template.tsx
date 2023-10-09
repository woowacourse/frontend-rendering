import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import BottomTabBar from "./BottomTabBar";

const Template = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      {children}
      <BottomTabBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 450px;
  background: white;
  margin: auto;
`;

export default Template;
