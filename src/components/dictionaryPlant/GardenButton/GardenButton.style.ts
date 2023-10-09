import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  column-gap: 4px;
  align-items: center;

  height: 24px;
  margin-top: 16px;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.sub};
`;
