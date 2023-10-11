'use client';

import { styled, css } from 'styled-components';

import { FONT_SIZE } from '@/styles/common';

import RestaurantWishItem from '@/components/RestaurantWishItem';
import useMediaQuery from '@/hooks/useMediaQuery';

import type { RestaurantData } from '@/types/api.types';

interface RestaurantWishListProps {
  restaurantData: RestaurantData[];
}

function RestaurantWishList({ restaurantData }: RestaurantWishListProps) {
  const { isMobile } = useMediaQuery();

  return (
    <StyledRestaurantCardListContainer>
      {restaurantData?.length !== 0 ? (
        <StyledRestaurantCardList isMobile={isMobile}>
          {restaurantData?.map(({ celebs, ...restaurant }) => (
            <RestaurantWishItem
              key={restaurant.id}
              restaurant={restaurant}
              celebs={celebs}
            />
          ))}
        </StyledRestaurantCardList>
      ) : (
        <>
          <h3>아직 좋아요를 누른 음식점이 없어요.</h3>
          <StyledDescription>
            위시리스트에 음식점을 추가하려면 음식점 카드의 좋아요 버튼을
            눌러주세요!
          </StyledDescription>
        </>
      )}
    </StyledRestaurantCardListContainer>
  );
}

export default RestaurantWishList;

const StyledRestaurantCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  margin: 3.2rem 2.4rem;
`;

const StyledDescription = styled.div`
  font-size: ${FONT_SIZE.md};
`;

const StyledRestaurantCardList = styled.div<{ isMobile: boolean }>`
  display: grid;
  gap: 4rem 2.4rem;

  height: 100%;

  ${({ isMobile }) =>
    isMobile
      ? css`
          grid-template-columns: 1fr;
        `
      : css`
          grid-template-columns: 1fr 1fr 1fr;

          @media screen and (width <= 1240px) {
            grid-template-columns: 1fr 1fr;
          }

          @media screen and (width <= 743px) {
            grid-template-columns: 1fr;
          }
        `}
`;
