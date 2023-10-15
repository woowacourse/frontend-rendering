import Image from 'next/image';
import Text from '../components/common/Text';
import * as S from './Navbar.style';

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <Image src="/nav_home_focus.svg" alt="navbar 홈 이미지" width={26} height={26} />
        <Text color="primary" $fontSize="extraSmall" $fontWeight="normal">
          홈
        </Text>
      </S.IconWrapper>

      <S.IconSpace size={7} />

      <S.IconWrapper>
        <Image src="/nav_seeTogether.svg" alt="navbar 모아보기 이미지" width={26} height={26} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          모아보기
        </Text>
      </S.IconWrapper>

      <S.IconSpace size={7} />

      <S.IconWrapper>
        <Image src="/nav_addMapOrPin.svg" alt="navbar + 이미지" width={24} height={24} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          추가하기
        </Text>
      </S.IconWrapper>

      <S.IconSpace size={7} />

      <S.IconWrapper>
        <Image src="/nav_favorite.svg" alt="navbar 즐겨찾기 이미지" width={24} height={23} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          즐겨찾기
        </Text>
      </S.IconWrapper>

      <S.IconSpace size={7} />

      <S.IconWrapper>
        <Image src="/nav_profile.svg" alt="navbar 내 정보 이미지" width={24} height={24} />
        <Text color="darkGray" $fontSize="extraSmall" $fontWeight="normal">
          내 정보
        </Text>
      </S.IconWrapper>
    </S.Wrapper>
  );
};

export default Navbar;
