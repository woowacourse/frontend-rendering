import * as S from './style';
import SquareButton from '@components/common/SquareButton';

export default function BottomButtonPart({
  openToast,
}: {
  openToast: () => void;
}) {
  return (
    <S.BottomButtonContainer>
      <SquareButton
        aria-label="게시글 신고"
        theme="fill"
        onClick={() => openToast()}>
        게시물 신고
      </SquareButton>
      <SquareButton
        aria-label="작성자 닉네임 신고"
        theme="fill"
        onClick={() => openToast()}>
        작성자 닉네임 신고
      </SquareButton>
    </S.BottomButtonContainer>
  );
}
