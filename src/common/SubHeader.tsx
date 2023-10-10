import styled from "@emotion/styled";
import { BiArrowBack } from "@react-icons/all-files/bi/BiArrowBack";

interface SubHeaderProps {
  title: string;
  onClickBack?: () => void;
}

const SubHeader = ({ title, onClickBack }: SubHeaderProps) => {
  return (
    <HeaderContainer>
      {onClickBack && (
        <ArrowIconWrapper onClick={onClickBack}>
          <BiArrowBack size={24} />
        </ArrowIconWrapper>
      )}
      {title}
    </HeaderContainer>
  );
};

export default SubHeader;

export const ArrowIconWrapper = styled.button`
  position: absolute;
  left: 20px;
  width: 24px;
  height: 24px;
  color: black;
  background: transparent;
`;

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  height: 60px;
  border-bottom: 1px solid #222;
`;
