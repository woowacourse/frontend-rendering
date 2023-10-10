import styled from '@emotion/styled';

interface SideBarStyleProps {
  $isSelected: boolean;
}

interface SideBarContainerStyleProps {
  $prevIndex: number;
  $nextIndex: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LogoHeader = styled.header<{ $currentIndex: number }>`
  background: #446c7d;
  padding-top: 40px;
  border-radius: ${({ $currentIndex }) =>
    $currentIndex === 2 ? '0 0 40px 0' : '0'};
`;

export const LogoImgWrapper = styled.button`
  display: flex;
  align-self: flex-start;
  background: transparent;
  padding: 0 0 40px 40px;

  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 150px;
`;

export const PageSideBarWrapper = styled.div`
  padding: 0 0 0 30px;
`;

export const SideBarContainer = styled.div<SideBarContainerStyleProps>`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  width: 240px;
  height: 250px;
  background: linear-gradient(to right, #446c7d 20%, white 80%);

  div:nth-child(${(props) => props.$prevIndex}) {
    border-radius: 0 0 40px 0;
  }

  div:nth-child(${(props) => props.$nextIndex}) {
    border-radius: 0 40px 0 0;
  }
`;

export const LabelContent = styled.span<SideBarStyleProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  width: 240px;
  height: 50px;
  font-size: 16px;
  font-weight: ${(props) => (props.$isSelected ? '600' : '400')};
  color: ${({ $isSelected }) => ($isSelected ? '#121b4f' : 'white')};

  border-radius: 40px 0 0 40px;
  padding-left: 20px;

  cursor: pointer;
`;

export const SideBarContent = styled.div<{
  $isSelected: boolean;
  $currentIndex: number;
}>`
  background-color: ${({ $isSelected }) => ($isSelected ? 'white' : '#446c7d')};
  border-radius: 40px 0 0 40px;

  :hover {
    opacity: 80%;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

export const LogoutContainer = styled.div<{ $currentIndex: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #446c7d 10%,
    #446c7d 30%,
    #eeccba 100%
  );
  border-radius: 40px;
  border-radius: ${({ $currentIndex }) =>
    $currentIndex === 6 ? '0 40px 0 0' : '0'};
`;

export const LogoutButton = styled.button`
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  padding: 20px 0 0 20px;
  margin: 10px 30px 0 30px;
  background: transparent;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

export const CopyRight = styled.p`
  color: white;
  padding-left: 50px;
`;

export const EmptyContent = styled.div`
  width: 240px;
  height: 50px;
  background: #446c7d;
`;

export const CharacterImage = styled.img`
  position: absolute;
  width: 250px;
  height: 200px;
  bottom: 0;
  left: 0;
`;
