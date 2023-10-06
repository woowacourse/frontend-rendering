'use client';

import { MouseEvent } from 'react';

import { useToggle } from '@/hooks';

import { PATH } from '@/constants/path';

import IconButton from '../IconButton';
import LogoButton from '../LogoButton';
import SearchBar from '../SearchBar';

import * as S from './style';
import { useRouter } from 'next/navigation';

interface NarrowMainHeaderProps {
  handleMenuOpenClick: () => void;
}

export default function NarrowMainHeader({
  handleMenuOpenClick,
}: NarrowMainHeaderProps) {
  const {
    isOpen: isSearchInputOpen,
    openComponent: openSearchInput,
    closeComponent: closeSearchInput,
  } = useToggle();

  const router = useRouter();

  const movePostListPage = () => {
    router.push('/');
  };

  const moveUserInfoPage = () => {
    router.push(PATH.USER_INFO);
  };

  const moveRankingPage = () => {
    router.push(PATH.RANKING);
  };

  return isSearchInputOpen ? (
    <S.Background onClick={closeSearchInput}>
      <S.Container onClick={(event: MouseEvent) => event.stopPropagation()}>
        <SearchBar size='free' isOpen={isSearchInputOpen} autoFocus />
      </S.Container>
    </S.Background>
  ) : (
    <S.Container>
      <IconButton category='category' onClick={handleMenuOpenClick} />
      <LogoButton content='icon' onClick={movePostListPage} />
      <IconButton category='search' onClick={openSearchInput} />
      <IconButton category='userInfo' onClick={moveUserInfoPage} />
      <IconButton category='ranking' onClick={moveRankingPage} />
    </S.Container>
  );
}
