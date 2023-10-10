'use client';
import { styled } from 'styled-components';

export const AbsoluteDiv = styled.div`
  position: absolute;
  top: -40%;
  opacity: 0.7;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  picture {
    border-radius: 4px;
    box-shadow: rgba(31, 34, 37, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 24px 48px,
      rgba(0, 0, 0, 0.02) 0px 4px 16px;
    z-index: 2;
  }

  picture:hover {
    transition: 0.4s all;
    transform: scale(1.1);
  }
`;
export const Introduce = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  gap: 4rem;

  h1 {
    font-size: 4rem;
    text-align: center;
  }
  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.gray8};
  }
`;
export const Container = styled.div`
  background: linear-gradient(to top, #ffffff, #fef8ee);

  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginModalButton = styled.button`
  background: linear-gradient(50deg, #eb23f9, #7733ff);
  box-shadow: rgba(31, 34, 37, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 24px 48px,
    rgba(0, 0, 0, 0.02) 0px 4px 16px;
  color: #fff;
  width: 11rem;
  height: 3.5rem;
  border-radius: 8px;
  z-index: 2;
`;
export const LoginModalButtonLarge = styled.button`
  background: linear-gradient(50deg, #eb23f9, #7733ff);
  box-shadow: rgba(31, 34, 37, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 24px 48px,
    rgba(0, 0, 0, 0.02) 0px 4px 16px;
  color: #ffffffdf;
  width: 20rem;
  font-size: 2rem;
  font-weight: 500;
  height: 5rem;
  border-radius: 8px;
  z-index: 2;
`;
export const Header = styled.header`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #ffffffbc;
  flex: 0 0 5rem;
  z-index: 1;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 900;
`;
