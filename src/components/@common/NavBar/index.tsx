'use client';

import { useRouter } from 'next/navigation';
import useAddToast from 'hooks/@common/useAddToast';
import useCheckSessionId from 'hooks/queries/auth/useCheckSessionId';
import NavItem from './NavItem';
import { NavButton, Wrapper, NavLink } from './NavBar.style';
import { URL_PATH } from 'constants/index';

const NavBar = () => {
  const addToast = useAddToast();
  const router = useRouter();

  const { isSuccess: isLoggedIn } = useCheckSessionId(false);

  const goToLogin = () => {
    router.push(URL_PATH.login);
  };

  const askLogin = () => {
    addToast({
      type: 'info',
      message: '로그인 후 이용할 수 있어요',
      time: 3000,
      buttonContent: '로그인',
      onClickButton: goToLogin,
    });
  };

  return (
    <Wrapper>
      <NavLink href={URL_PATH.main}>
        <NavItem path={URL_PATH.main} iconId="home-line" label="메인" />
      </NavLink>
      <NavLink href={URL_PATH.garden}>
        <NavItem path={URL_PATH.garden} iconId="bulletin-board-line" label="모두의 정원" />
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink href={URL_PATH.reminder}>
            <NavItem path={URL_PATH.reminder} iconId="reminder" label="리마인더" />
          </NavLink>
          <NavLink href={URL_PATH.petList}>
            <NavItem path={URL_PATH.petList} iconId="leaf" label="내 식물" />
          </NavLink>
          <NavLink href={URL_PATH.myPage}>
            <NavItem path={URL_PATH.myPage} iconId="account-circle-line" label="마이페이지" />
          </NavLink>
        </>
      ) : (
        <>
          <NavButton onClick={askLogin}>
            <NavItem path={URL_PATH.reminder} iconId="reminder" label="리마인더" />
          </NavButton>
          <NavButton onClick={askLogin}>
            <NavItem path={URL_PATH.petList} iconId="leaf" label="내 식물" />
          </NavButton>
          <NavLink href={URL_PATH.login}>
            <NavItem path={URL_PATH.login} iconId="account-circle-line" label="로그인" />
          </NavLink>
        </>
      )}
    </Wrapper>
  );
};

export default NavBar;
