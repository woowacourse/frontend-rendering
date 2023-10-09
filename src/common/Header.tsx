import { ROUTER_PATH } from "@/constants";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import StampcrushLogo from "../../public/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Link href={ROUTER_PATH.home}>
        <Image src={StampcrushLogo} alt="스탬프크러쉬 로고" />
      </Link>
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border-bottom: 2px solid #eeeeee;
`;
