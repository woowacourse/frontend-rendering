"use client";

import styled from "styled-components";

export const TagWrapper = styled.div`
  :hover {
    transition: all 0.35s ease;
    transform: scale(1.04);
  }
`;

export const Tag = styled.button`
  display: flex;
  align-items: center;

  height: 34px;
  padding: 0 15px;
  gap: 5px;

  background-color: white;
  border-radius: 16px;
  border: 1px solid var(--baton-red);

  color: var(--baton-red);
`;

export const CloseTagIcon = styled.img`
  width: 9px;
  height: 9px;
`;
