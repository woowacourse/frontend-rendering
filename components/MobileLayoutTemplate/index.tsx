import { ReactNode } from "react";

import IconButton from "../IconButton";
import NarrowTemplateHeader from "../NarrowTemplateHeader";

import * as S from "./style";

interface MobileLayoutTemplateProps {
  children: ReactNode;
}

const MobileLayoutTemplate = ({ children }: MobileLayoutTemplateProps) => {
  return (
    <>
      <NarrowTemplateHeader>
        <IconButton
          category="back"
          onClick={() => alert("현재 지원하지 않는 기능입니다.")}
        />
      </NarrowTemplateHeader>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </>
  );
};

export default MobileLayoutTemplate;
