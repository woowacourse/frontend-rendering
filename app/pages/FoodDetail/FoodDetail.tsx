import { styled } from 'styled-components';

import Button from '@/components/@common/Button/Button';
import InfoBlock from '@/components/@common/InfoBlock/InfoBlock';
import Label from '@/components/@common/Label/Label';
import BrandBlock from '@/components/Food/BrandBlock/BrandBlock';
import FoodProfile from '@/components/Food/FoodProfile/FoodProfile';
import NutritionStandardBlock, {
  State,
} from '@/components/Food/NutritionStandardBlock/NutritionStandardBlock';
import { getFoodDetail } from '@/apis/food';

const FoodDetail = async () => {
  const foodData = await getFoodDetail({ petFoodId: '39' });

  const {
    name,
    hasStandard,
    primaryIngredients,
    brand,
    functionality,
    purchaseUrl,
  } = foodData;

  const onClickPurchaseButton = () => {
    window.open(purchaseUrl, '_blank');
  };

  return (
    <>
      <FoodDetailWrapper>
        <FoodProfileContainer>
          <FoodProfile {...foodData} />
        </FoodProfileContainer>
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
            <NutritionText>{`${primaryIngredients.join(', ')}`}</NutritionText>
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
