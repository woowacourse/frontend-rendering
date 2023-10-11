"use client";

import styled from "styled-components";

export const List = styled.ul`
  list-style: none;

  li:not(:last-child) {
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 5px;
    }
  }
`;
