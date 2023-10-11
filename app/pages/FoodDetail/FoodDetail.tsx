'use client';

import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import Button from '@/components/@common/Button/Button';
import InfoBlock from '@/components/@common/InfoBlock/InfoBlock';
import Label from '@/components/@common/Label/Label';
import NavigationBar from '@/components/@common/NavigationBar/NavigationBar';
import PageHeader from '@/components/@common/PageHeader/PageHeader';
import BrandBlock from '@/components/Food/BrandBlock/BrandBlock';
import FoodProfile from '@/components/Food/FoodProfile/FoodProfile';
import NutritionStandardBlock, {
  State,
} from '@/components/Food/NutritionStandardBlock/NutritionStandardBlock';
import usePageTitle from '@/hooks/@common/usePageTitle';
import { useFoodDetailQuery } from '@/hooks/query/food';
import { useRouter } from 'next/navigation';

const FoodDetail = () => {
  const { foodData } = useFoodDetailQuery({ petFoodId: '39' });

  const navigationRef = useRef<NavigationBar>(null);

  const [pageIndex, setPageIndex] = useState<number>(0);

  if (!foodData) throw new Error('식품 상세 페이지를 불러오지 못했습니다.');

  const {
    name,
    hasStandard,
    primaryIngredients,
    brand,
    functionality,
    purchaseUrl,
  } = foodData;

  usePageTitle(`집사의 고민 - ${name}`);

  const onClickPurchaseButton = () => {
    window.open(purchaseUrl, '_blank');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && pageIndex < 1) {
        navigationRef.current?.snapToNext();
      }

      if (e.key === 'ArrowLeft' && pageIndex > 0) {
        navigationRef.current?.snapToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pageIndex]);

  return (
    <>
      <FoodDetailWrapper>
        <FoodProfileContainer>
          <FoodProfile {...foodData} />
        </FoodProfileContainer>
        <NavigationBar
          navData={[{ title: '상세정보' }]}
          navIndex={pageIndex}
          onChangeNav={setPageIndex}
          ref={navigationRef}
        />
        {pageIndex === 0 && (
          <FoodDetailInfoWrapper>
            <InfoBlock headText="기준 충족 여부">
              <NutritionStandard>
                <NutritionStandardBlock
                  state={State.us}
                  satisfied={hasStandard.us}
                />
                <NutritionStandardBlock
                  state={State.eu}
                  satisfied={hasStandard.eu}
                />
              </NutritionStandard>
            </InfoBlock>
            <InfoBlock headText="주원료">
              <NutritionText>{`${primaryIngredients.join(
                ', '
              )}`}</NutritionText>
            </InfoBlock>
            <InfoBlock headText="기능성">
              <FunctionalList>
                {Boolean(functionality.length) ? (
                  functionality.map((functional, index) => (
                    <Label key={index} text={functional} />
                  ))
                ) : (
                  <NutritionText>특별한 기능성이 없어요.</NutritionText>
                )}
              </FunctionalList>
            </InfoBlock>
            <InfoBlock headText="브랜드 정보를 꼭 확인하세요!">
              <BrandBlock {...brand} />
            </InfoBlock>
          </FoodDetailInfoWrapper>
        )}
      </FoodDetailWrapper>
      <Button text="구매하러 가기" onClick={onClickPurchaseButton} fixed />
    </>
  );
};

export default FoodDetail;

const FoodDetailWrapper = styled.div`
  padding: 4rem 0 12rem;
`;

const FoodProfileContainer = styled.div`
  padding: 4rem;
`;

const FoodDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding: 2.8rem 2rem;
`;

const NutritionStandard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const NutritionText = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.color.grey400};
  letter-spacing: -0.05rem;
`;

const FunctionalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const BrandIconInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey300};
  letter-spacing: -0.05rem;
`;

const StandardToolTip = styled.button`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.grey300};
  letter-spacing: -0.05rem;

  background-color: transparent;
  border: none;
`;
