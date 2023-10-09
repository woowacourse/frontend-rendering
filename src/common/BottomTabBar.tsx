import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineGift } from "@react-icons/all-files/ai/AiOutlineGift";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import styled from "@emotion/styled";
import { ROUTER_PATH } from "@/constants";

const BOTTOM_TABS = [
  {
    path: ROUTER_PATH.home,
    label: "홈",
    icon: <AiOutlineHome size={28} />,
  },
  {
    path: ROUTER_PATH.reward,
    label: "리워드",
    icon: <AiOutlineGift size={28} />,
  },
  {
    path: ROUTER_PATH.mypage,
    label: "마이페이지",
    icon: <AiOutlineUser size={28} />,
  },
];

const BottomTabBar = () => {
  const location = useRouter();

  return (
    <TabBarContainer>
      {BOTTOM_TABS.map((tab, index) => (
        <TapBarItem key={index} $isSelected={tab.path === location.pathname}>
          <Link href={tab.path}>
            {tab.icon}
            {tab.label}
          </Link>
        </TapBarItem>
      ))}
    </TabBarContainer>
  );
};

export default BottomTabBar;

const TabBarContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 80px;

  position: fixed;
  bottom: 0;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px -4px 8px 0 rgba(0, 0, 0, 0.1);
  background: white;
`;

const TapBarItem = styled.button<{ $isSelected: boolean }>`
  background-color: transparent;
  border: none;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    gap: 4px;

    color: ${({ $isSelected }) => ($isSelected ? "black" : "#999")};
    transform: ${({ $isSelected }) => $isSelected && "Scale(1.05)"};
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
`;
