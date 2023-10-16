import { styled, css } from 'styled-components';

export const Container = styled.header`
  height: 64px;
  padding: 0 14px;
`;

export const landingPageLinkButton = css`
  display: flex;
  align-items: center;

  padding: 0;
  column-gap: 20px;

  cursor: not-allowed;
`;

export const headerTitle = css`
  font-size: 32px;
  font-weight: 800;
  text-align: right;
  color: ${({ theme }) => theme.color.PRIMARY};
`;
