import HeaderTextButton from "@/components/HeaderTextButton";
import IconButton from "@/components/IconButton";

import { LoadingType } from "../types";

import * as S from "./style";

type MovePageEvent =
  | "moveWritePostPage"
  | "moveVoteStatisticsPage"
  | "movePostListPage";

interface PostDetailPageChildProps {
  isWriter: boolean;
  isClosed: boolean;
  handleEvent: {
    movePage: Record<MovePageEvent, () => void>;
    controlPost: {
      setEarlyClosePost: () => void;
      deletePost: () => void;
      reportPost: (reason: string) => void;
      reportNickname: (reason: string) => void;
    };
  };
  isEventLoading: Record<LoadingType, boolean>;
}

export default function InnerHeaderPart({}: PostDetailPageChildProps) {
  const toggleComponent = () => {
    alert("현재 해당 기능은 지원하지 않습니다.");
  };

  const handleBackButtonClick = () => {
    alert("현재 해당 기능은 지원하지 않습니다.");
  };

  return (
    <>
      <IconButton category="back" onClick={handleBackButtonClick} />
      <S.HeaderWrapper>
        <>
          <HeaderTextButton
            aria-label="게시글 신고 메뉴 열기"
            onClick={toggleComponent}
          >
            신고
          </HeaderTextButton>
          ㄴ
        </>
      </S.HeaderWrapper>
    </>
  );
}
