"use client";

import { FaSearch } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import Button from "./Button";
import Link from "next/link";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Container>
      <Link href="/">
        <Logo src="/assets/logo.svg" />
      </Link>
      <ButtonContainer>
        <IconButton>
          <FaRankingStar />
        </IconButton>
        <IconButton>
          <FaSearch />
        </IconButton>
        <UserButtonContainer>
          <Button $variant="default" $fullWidth $fullHeight>
            로그인
          </Button>
        </UserButtonContainer>
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 66px;
  padding: 0 ${({ theme }) => theme.space[4]};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  align-items: center;
  margin-left: auto;
`;

const Logo = styled.img`
  height: ${({ theme }) => theme.fontSize["3xl"]};
`;

const UserButtonContainer = styled.div`
  width: 100px;
`;

const IconButton = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding: ${({ theme }) => theme.space[2]};

  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  color: ${({ theme }) => theme.color.primary};
`;
