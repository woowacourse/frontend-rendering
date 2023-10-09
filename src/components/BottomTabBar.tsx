import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineGift } from "@react-icons/all-files/ai/AiOutlineGift";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import styled from "@emotion/styled";

const BOTTOM_TABS = [
  {
    path: "/",
    label: "홈",
    icon: <AiOutlineHome size={28} />,
  },
  {
    path: "/reward",
    label: "리워드",
    icon: <AiOutlineGift size={28} />,
  },
  {
    path: "/mypage",
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

const TabBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 80px;
  border-radius: 8px 8px 0 0;
  box-shadow: 0px -4px 8px 0 rgba(0, 0, 0, 0.1);
  background: white;
`;

const TapBarItem = styled.div<{ $isSelected: boolean }>`
  & > a {
    display: flex;
    width: 70px;
    flex-direction: column;
    align-items: center;
    color: ${({ $isSelected }) => ($isSelected ? "black" : "#999")};

    font-size: 14px;
    text-decoration: none;
    transform: ${({ $isSelected }) => ($isSelected ? "Scale(1.05)" : null)};
    transition: all 0.2s ease-in-out;
    gap: 4px;
  }
`;
