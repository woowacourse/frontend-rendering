import * as S from './style';
import SquareButton from '@components/common/SquareButton';

interface PostDetailPageChildProps {
  handleEvent: {
    openToast: (text: string) => void;
  };
}

export default function BottomButtonPart({
  handleEvent: { openToast },
}: PostDetailPageChildProps) {
  const handleActionButtonClick = () => {
    openToast('로그인 후에 기능을 이용해주세요.');
  };

  return (
    <S.BottomButtonContainer>
      <SquareButton
        aria-label="게시글 신고"
        theme="fill"
        onClick={() => handleActionButtonClick()}
      >
        게시물 신고
      </SquareButton>
      <SquareButton
        aria-label="작성자 닉네임 신고"
        theme="fill"
        onClick={() => handleActionButtonClick()}
      >
        작성자 닉네임 신고
      </SquareButton>
    </S.BottomButtonContainer>
  );
}
