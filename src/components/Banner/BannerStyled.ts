"use client";

import styled from "styled-components";

export const BannerBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 292px;

  background-image: url("/banner_background.png");

  @media (max-width: 768px) {
    height: 120px;
  }
`;

export const BannerContents = styled.img`
  width: 904px;
  height: 240px;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 340px;
    height: 90px;
  }
`;
