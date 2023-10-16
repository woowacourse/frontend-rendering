import * as S from './BackButton.styled';
import Button from '../../../components/common/Button/Button';
import Text from '../../../components/common/Text/Text';
import Image from 'next/image';

interface BackButtonProps {
  label: string;
}

const BackButton = (props: BackButtonProps) => {
  const { label } = props;

  return (
    <Button type="button" variant="plain" css={S.backButton} disabled>
      <S.ArrowLeftIconWrapper>
        <Image src="/images/arrow-left2.svg" width={32} height={32} alt="" />
      </S.ArrowLeftIconWrapper>
      <Text as="p" weight="semiBold">
        {label}
      </Text>
    </Button>
  );
};

export default BackButton;
