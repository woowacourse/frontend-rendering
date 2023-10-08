'use client';

import { useRouter } from 'next/navigation';
import { Header } from './DictionaryPlantDetail.style';
import Image from 'components/@common/Image';
import SvgFill from 'components/@common/SvgIcons/SvgFill';
import DictionaryPlantContent from 'components/dictionaryPlant/DictionaryPlantContent';
import { BackButton, BottomSheet, Main, PrimaryButton } from './DictionaryPlantDetail.style';
import useAddToast from 'hooks/@common/useAddToast';
import useCheckSessionId from 'hooks/queries/auth/useCheckSessionId';
import useDictionaryPlantDetail from 'hooks/queries/dictionaryPlant/useDictionaryPlantDetail';
import { URL_PATH } from 'constants/index';
import theme from 'style/theme.style';

interface DictionaryPlantDetailProps {
  params: {
    dictId: string;
  };
}

const DictionaryPlantDetail = (props: DictionaryPlantDetailProps) => {
  const {
    params: { dictId: id },
  } = props;
  if (!id) throw new Error('URL에 id가 없습니다.');

  const { isSuccess: isLoggedIn } = useCheckSessionId(false);
  const addToast = useAddToast();

  const dictionaryPlantId = Number(id);
  const { data: dictionaryPlantDetail } = useDictionaryPlantDetail(dictionaryPlantId);
  const { image, name } = dictionaryPlantDetail;

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goPetPlantRegisterForm = () => {
    router.push(`/pet/register/${id}`);
  };

  const goLogin = () => {
    router.push(URL_PATH.login);
  };

  const warning = () => {
    addToast({
      type: 'info',
      message: '로그인 후 등록할 수 있어요',
      time: 4000,
      buttonContent: '로그인',
      onClickButton: goLogin,
    });
  };

  return (
    <>
      <Header>
        <BackButton onClick={goBack}>
          <SvgFill icon="line-arrow-left" aria-label="뒤로 가기" color={theme.color.sub} />
        </BackButton>
      </Header>
      <Main>
        <Image type="wide" src={image} alt={name} size="300px" />
        <DictionaryPlantContent {...dictionaryPlantDetail} />
      </Main>
      <BottomSheet>
        <PrimaryButton onClick={isLoggedIn ? goPetPlantRegisterForm : warning}>
          반려 식물로 등록하기
        </PrimaryButton>
      </BottomSheet>
    </>
  );
};

export default DictionaryPlantDetail;
