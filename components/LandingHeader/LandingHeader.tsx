'use client';

import * as S from './LandingHeader.styled';
import Image from 'next/image';
import Text from '../../components/common/Text/Text';
import Button from '../../components/common/Button/Button';

const LandingHeader = () => {
  return (
    <S.Container>
      <Button
        type="button"
        variant="plain"
        disabled={true}
        css={S.landingPageLinkButton}
      >
        <Image src="images/logo.svg" width={44} height={59} alt="" />
        <Text as="h1" css={S.headerTitle}>
          짭바팀
        </Text>
      </Button>
    </S.Container>
  );
};

export default LandingHeader;
