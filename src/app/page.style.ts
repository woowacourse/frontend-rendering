'use client';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.section`
  width: 100%;
  position: fixed;
  padding: 12px 20px 0 20px;
  background-color: white;

  z-index: 1;
`;

export const TopicContainerWrapper = styled.article`
  width: 1036px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;
  padding-bottom: 64px;

  @media (max-width: 1076px) {
    width: 684px;
  }

  @media (max-width: 724px) {
    width: 332px;
  }
`;

export const NavbarWrapper = styled.section`
  width: 100%;
  position: fixed;
  bottom: 0;

  padding: 12px 20px 0 20px;
  background-color: white;

  z-index: 1;
`;
