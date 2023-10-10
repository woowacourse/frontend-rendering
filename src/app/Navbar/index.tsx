import { styled } from 'styled-components';
import Image from 'next/image';
import Space from '../components/common/Space';
import Text from '../components/common/Text';

const Navbar = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Image src="/nav_home_focus.svg" alt="navbar 홈 이미지" layout="intrinsic" width={26} height={26} />
        <Text color="primary" $fontSize="extraSmall" $fontWeight="normal">
          홈
        </Text>
      </IconWrapper>

      <IconSpace size={7} />

      <IconWrapper>
        <Image src="/nav_seeTogether.svg" alt="navbar 모아보기 이미지" layout="intrinsic" width={26} height={26} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          모아보기
        </Text>
      </IconWrapper>

      <IconSpace size={7} />

      <IconWrapper>
        <Image src="/nav_addMapOrPin.svg" alt="navbar + 이미지" layout="intrinsic" width={24} height={24} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          추가하기
        </Text>
      </IconWrapper>

      <IconSpace size={7} />

      <IconWrapper>
        <Image src="/nav_favorite.svg" alt="navbar 즐겨찾기 이미지" layout="intrinsic" width={24} height={23} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          즐겨찾기
        </Text>
      </IconWrapper>

      <IconSpace size={7} />

      <IconWrapper>
        <Image src="/nav_profile.svg" alt="navbar 내 정보 이미지" layout="intrinsic" width={24} height={24} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          내 정보
        </Text>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52px;
  cursor: pointer;
`;

const IconSpace = styled(Space)`
  display: 'block';
`;

export default Navbar;
