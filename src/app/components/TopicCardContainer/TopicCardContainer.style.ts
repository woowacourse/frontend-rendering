'use client';

import { styled } from 'styled-components';
import Text from '../common/Text';

export const PointerText = styled(Text)`
  cursor: pointer;
`;

export const TopicsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
