import { styled } from 'styled-components';

import { Size } from '@/types/style';

const SIZE = {
  sm: { height: '40px' },
  md: { height: '60px' },
  lg: { height: '80px' },
  free: { height: '100%' },
};

export const Wrapper = styled.div<{ $size: Size | 'free' }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  height: ${(props) => SIZE[props.$size].height};

  border-color: #f85554;
`;

export const Content = styled.button<{ $isSelected: boolean }>`
  height: calc(100% - 1px);
  width: 100%;

  background-color: ${(props) => props.$isSelected && '#F85554'};
  color: ${(props) => (props.$isSelected ? 'white' : 'var(--primary-color)')};

  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1px;

  border-color: #f85554;
  cursor: pointer;
`;
