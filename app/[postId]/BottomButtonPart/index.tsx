import SquareButton from "@/components/SquareButton";
import type { LoadingType } from "../types";

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
    openToast: (text: string) => void;
  };
  isEventLoading: Record<LoadingType, boolean>;
}

const BottomButtonPart = ({
  isWriter,
  isClosed,
  handleEvent: { movePage, controlPost, openToast },
  isEventLoading,
}: PostDetailPageChildProps) => {
  const isLoggedIn = false;
  const { moveWritePostPage, moveVoteStatisticsPage } = movePage;
  const { setEarlyClosePost, deletePost, reportPost, reportNickname } =
    controlPost;
  const { isDeletePostLoading, isReportPostLoading, isReportNicknameLoading } =
    isEventLoading;

  const handleActionButtonClick = (action: string) => {
    if (!isLoggedIn) {
      openToast("로그인 후에 기능을 이용해주세요.");
      return;
    }
  };

  return (
    <S.BottomButtonContainer>
      {!isWriter ? (
        <>
          <SquareButton
            aria-label="게시글 신고"
            theme={isReportPostLoading ? "gray" : "fill"}
            onClick={() => handleActionButtonClick("POST_REPORT")}
          >
            게시물 신고
          </SquareButton>
          <SquareButton
            aria-label="작성자 닉네임 신고"
            theme={isReportNicknameLoading ? "gray" : "fill"}
            onClick={() => handleActionButtonClick("NICKNAME_REPORT")}
          >
            작성자 닉네임 신고
          </SquareButton>
        </>
      ) : !isClosed ? (
        <>
          <SquareButton
            aria-label="게시글 조기마감"
            theme="fill"
            onClick={setEarlyClosePost}
          >
            조기마감
          </SquareButton>
          <SquareButton
            aria-label="게시글 수정"
            theme="blank"
            onClick={moveWritePostPage}
          >
            수 정
          </SquareButton>

          <SquareButton
            aria-label="게시글 삭제"
            theme={isDeletePostLoading ? "gray" : "fill"}
            onClick={() => handleActionButtonClick("DELETE")}
          >
            삭 제
          </SquareButton>
        </>
      ) : (
        <>
          <SquareButton
            aria-label="게시글 통계보기"
            theme="fill"
            onClick={moveVoteStatisticsPage}
          >
            통계보기
          </SquareButton>
          <SquareButton
            aria-label="게시글 삭제"
            theme={isDeletePostLoading ? "gray" : "fill"}
            onClick={() => handleActionButtonClick("DELETE")}
            disabled={isDeletePostLoading}
          >
            삭 제
          </SquareButton>
        </>
      )}
    </S.BottomButtonContainer>
  );
};

export default BottomButtonPart;
