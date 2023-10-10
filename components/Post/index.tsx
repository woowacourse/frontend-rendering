import { ForwardedRef, forwardRef, memo, useContext } from "react";

import { PostInfo } from "@/types/post";

import WrittenVoteOptionList from "@/components/WrittenVoteOptionList";

import { convertTextToElement } from "@/utils/convertTextToElement";
import { checkClosedPost } from "@/utils/checkClosedPost";
import { convertTimeToWord } from "@/utils/convertTimeToWord";

import commentIcon from "@/assets/comment.svg";
import photoIcon from "@/assets/photo_black.svg";

import * as S from "./style";

interface PostProps {
  postInfo: PostInfo;
  isPreview: boolean;
}

const Post = forwardRef(function Post(
  { postInfo, isPreview }: PostProps,
  ref: ForwardedRef<HTMLLIElement>
) {
  const {
    postId,
    category,
    imageUrl,
    title,
    writer,
    createTime,
    deadline,
    content,
    voteInfo,
    imageCount,
    commentCount,
  } = postInfo;
  const isLoggedIn = false;

  const isActive = !checkClosedPost(deadline);

  const isStatisticsVisible = false;

  const handleVoteClick = (newOptionId: number) => {
    if (!isLoggedIn) {
      alert("투표는 로그인 후에 이용하실 수 있습니다.");
      return;
    }
  };

  const isPreviewTabIndex = isPreview ? undefined : 0;

  return (
    <S.Container as={isPreview ? "li" : "div"} ref={ref} $isPreview={isPreview}>
      <S.DetailLink
        as={isPreview ? "" : "main"}
        $isPreview={isPreview}
        aria-describedby={
          isPreview
            ? "해당 게시물의 상세페이지로 이동하기"
            : "현재 상세페이지이므로 사용할 수 없습니다."
        }
      >
        <S.Category
          tabIndex={isPreviewTabIndex}
          aria-label={`카테고리 ${category
            .map((category) => category.name)
            .join("|")}`}
        >
          {category.map((category) => category.name).join(" | ")}
        </S.Category>
        <S.ActivateState
          tabIndex={isPreviewTabIndex}
          role="status"
          aria-label={`게시글 ${isActive ? "진행중" : "마감완료"}`}
          $isActive={isActive}
        />
        <S.Title
          tabIndex={isPreviewTabIndex}
          aria-label={`게시글 제목: ${title}`}
          $isPreview={isPreview}
        >
          {title}
        </S.Title>
        <S.Wrapper>
          <span
            aria-label={`작성자 ${writer.nickname}`}
            tabIndex={isPreviewTabIndex}
          >
            {writer.nickname}
          </span>
          <S.Wrapper>
            <span
              aria-label={`작성일시 ${convertTimeToWord(createTime)}`}
              tabIndex={isPreviewTabIndex}
            >
              {`${convertTimeToWord(createTime)}  |`}
            </span>
            <span
              aria-label={`투표 마감일시 ${
                isActive ? convertTimeToWord(deadline) : "마감 완료"
              }`}
              tabIndex={isPreviewTabIndex}
            >
              {isActive ? convertTimeToWord(deadline) : "마감 완료"}
            </span>
          </S.Wrapper>
        </S.Wrapper>
        <S.Content
          tabIndex={isPreviewTabIndex}
          aria-label={`내용: ${content}`}
          $isPreview={isPreview}
        >
          {convertTextToElement(content)}
        </S.Content>
        {!isPreview && imageUrl && (
          <S.Image src={imageUrl} alt={"본문에 포함된 이미지"} />
        )}
      </S.DetailLink>
      <WrittenVoteOptionList
        isStatisticsVisible={isStatisticsVisible}
        selectedOptionId={voteInfo.selectedOptionId}
        handleVoteClick={handleVoteClick}
        isPreview={isPreview}
        voteOptionList={voteInfo.options}
      />
      {isPreview && (
        <S.PreviewBottom>
          <S.IconUint>
            <S.Icon src={photoIcon} alt="사진 갯수" />
            <span>{imageCount}</span>
          </S.IconUint>
          <S.IconUint>
            <S.Icon src={commentIcon} alt="댓글 갯수" />
            <span>{commentCount}</span>
          </S.IconUint>
        </S.PreviewBottom>
      )}
    </S.Container>
  );
});

export default memo(Post);
