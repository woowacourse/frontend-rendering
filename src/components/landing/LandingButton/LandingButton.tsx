import { styled } from "styled-components";

import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";

const LandingButton = () => {
  const navigate = useRouter();

  const handleClickStartButton = () => {
    navigate.push("/progress");
  };

  return (
    <ButtonContainer>
      <Button variant="primary" onClick={handleClickStartButton} $block={false} size="small">
        하루스터디 시작하기
      </Button>
    </ButtonContainer>
  );
};

export default LandingButton;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
