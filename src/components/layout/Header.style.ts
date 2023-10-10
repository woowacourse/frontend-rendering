'use client';

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0 30px;

  border-bottom: 0.3px solid #333333;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  width: 100%;
  height: 80px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const ProfileName = styled.p`
  text-align: end;

  @media (max-width: 768px) {
  }
`;

export const Logo = styled.div`
  width: 197px;
  height: 35px;

  background-image: url('/logo-image.svg');
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;

  @media (max-width: 768px) {
    background-image: url('/logo-image-mobile.svg');

    width: 53px;
    height: 30px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const LoginButton = styled.button`
  width: 76px;
  height: 35px;

  border-radius: 50px;

  background-color: var(--baton-red);
  color: var(--white-color);
  font-size: 14px;
`;
