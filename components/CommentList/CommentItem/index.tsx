import * as S from './style';
import { Comment } from '@type/comment';
import { convertTextToElement } from '@utils/post/convertTextToElement';

interface CommentItemProps {
  comment: Comment;
}

export default function CommentItem({ comment }: CommentItemProps) {
  const { member, content, createdAt, isEdit } = comment;

  return (
    <S.Container tabIndex={0}>
      <S.Header>
        <S.UserContainer>
          <S.Nickname aria-label={`댓글 작성자: ${member.nickname}`}>
            {member.nickname}
          </S.Nickname>
          <S.SubTitleContainer>
            <S.SubTitle>{createdAt}</S.SubTitle>
            {isEdit && <S.SubTitle>(수정됨)</S.SubTitle>}
          </S.SubTitleContainer>
        </S.UserContainer>
      </S.Header>
      <S.Description>{convertTextToElement(content)}</S.Description>
    </S.Container>
  );
}
