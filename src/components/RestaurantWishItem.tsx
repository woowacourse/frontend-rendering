'use client';

import { styled } from 'styled-components';
import { MouseEventHandler } from 'react';

import Image from 'next/image';

import ImageCarousel from '@/components/ImageCarousel';
import ProfileImageList from '@/components/ProfileImageList';

import LoveSVG from '../../public/love.svg';

import { FONT_SIZE, truncateText } from '@/styles/common';

import type { Celeb } from '@/types/celeb.types';
import type { Restaurant } from '@/types/restaurant.types';

interface RestaurantWishItemProps {
  restaurant: Restaurant;
  celebs?: Celeb[];
}

function RestaurantWishItem({ restaurant, celebs }: RestaurantWishItemProps) {
  const { id, images, name, roadAddress, category, phoneNumber, likeCount } =
    restaurant;

  const onClick = () => {};

  const toggle: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <StyledContainer onClick={onClick}>
        <StyledImageViewer>
          <ImageCarousel images={images} type="list" />
          <LikeButton aria-label="좋아요" type="button" onClick={toggle}>
            <Image src={LoveSVG} width={20} height={20} alt="svg파일" />
          </LikeButton>
        </StyledImageViewer>
        <section>
          <StyledInfo>
            <StyledCategory>{category}</StyledCategory>
            <StyledName role="columnheader">{name}</StyledName>
            <StyledAddress>{roadAddress}</StyledAddress>
            <StyledAddress>{phoneNumber}</StyledAddress>
          </StyledInfo>
          <StyledProfileImageSection>
            <span>좋아요 {likeCount.toLocaleString()}개</span>
            {celebs && <ProfileImageList celebs={celebs} size="42px" />}
          </StyledProfileImageSection>
        </section>
      </StyledContainer>
    </>
  );
}

export default RestaurantWishItem;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.8rem;

  width: 100%;
  height: 100%;

  & > section {
    display: flex;
    justify-content: space-between;
  }

  cursor: pointer;
`;

const StyledImageViewer = styled.div`
  position: relative;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  position: relative;

  width: 100%;

  padding: 0.4rem;
`;

const StyledName = styled.h5`
  ${truncateText(1)}
`;

const StyledAddress = styled.span`
  ${truncateText(1)}
  color: var(--gray-4);
  font-size: ${FONT_SIZE.md};
  line-height: 20px;
`;

const StyledCategory = styled.span`
  color: var(--gray-3);
  font-size: ${FONT_SIZE.sm};
`;

const StyledProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  min-width: fit-content;

  & > span {
    font-size: ${FONT_SIZE.sm};
    font-weight: 700;
    padding-top: 0.4rem;
  }
`;

const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 8;

  border: none;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;
