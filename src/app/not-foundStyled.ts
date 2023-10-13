"use client";

import styled from "styled-components";

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  margin-top: 10vh;
`;

export const NotFoundImage = styled.img`
  height: 40vh;
`;

export const Message = styled.h1`
  font-size: 30px;
  line-height: 1.5;
  white-space: pre-wrap;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;
