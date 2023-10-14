import { PropsWithChildren } from "react";

import * as S from "./style";

const NarrowTemplateHeader = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default NarrowTemplateHeader;
