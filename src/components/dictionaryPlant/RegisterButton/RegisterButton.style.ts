import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 36px;
  padding: 0 1rem;

  font: 500 1.5rem/ 1.8rem NanumSquareRound;
  color: ${({ theme }) => theme.color.background};
  letter-spacing: 1px;

  background: ${(props) => props.theme.color.primary};
  border-radius: 4px;
`;
