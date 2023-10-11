import { Suspense, useContext } from 'react';

import CategorySection from './CategorySection';
import GuestProfile from './GuestProfile';
import * as S from './style';

export default function Dashboard() {
  return (
    <S.Container>
      <GuestProfile />
      <S.CategorySectionWrapper>
        <CategorySection />
      </S.CategorySectionWrapper>
    </S.Container>
  );
}
