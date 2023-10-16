'use client';

import type { DictionaryPlant } from 'types/dictionaryPlant';
import { useRouter } from 'next/navigation';
import { URL_PATH } from 'constants/index';
import useCheckSessionId from 'hooks/queries/auth/useCheckSessionId';
import useAddToast from 'hooks/@common/useAddToast';
import { PrimaryButton } from './RegisterButton.style';

interface RegisterButtonProps {
  dictionaryPlantId: DictionaryPlant['id'];
}

const RegisterButton = (props: RegisterButtonProps) => {
  const { dictionaryPlantId: id } = props;

  const { isSuccess: isLoggedIn } = useCheckSessionId(false);
  const router = useRouter();
  const addToast = useAddToast();

  const goToPetPlantRegisterForm = () => {
    router.push(`/pet/register/${id}`);
  };

  const goToLogin = () => {
    router.push(URL_PATH.login);
  };

  const suggestLogin = () => {
    addToast({
      type: 'info',
      message: '로그인 후 등록할 수 있어요',
      time: 4000,
      buttonContent: '로그인',
      onClickButton: goToLogin,
    });
  };

  return (
    <PrimaryButton onClick={isLoggedIn ? goToPetPlantRegisterForm : suggestLogin}>
      반려 식물로 등록하기
    </PrimaryButton>
  );
};

export default RegisterButton;
