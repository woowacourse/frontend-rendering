import { AiOutlineUnorderedList } from "@react-icons/all-files/ai/AiOutlineUnorderedList";
import { AiOutlineLogout } from "@react-icons/all-files/ai/AiOutlineLogout";
import { AiOutlineFileText } from "@react-icons/all-files/ai/AiOutlineFileText";
import { GrUserSettings } from "@react-icons/all-files/gr/GrUserSettings";
import styled from "@emotion/styled";
import { API_BASE_URL, FEEDBACK_FORM_LINK } from "@/constants";
import { CustomerProfileRes } from "@/types/api/response";

const MYPAGE_NAV_OPTIONS = [
  {
    key: "rewardHistory",
    value: "리워드 사용 내역",
    icon: <AiOutlineUnorderedList key="rewardHistory" />,
  },
  {
    key: "stampHistory",
    value: "스탬프 적립 내역",
    icon: <AiOutlineUnorderedList key="stampHistory" />,
  },
  {
    key: "customerSetting",
    value: "내 정보 변경",
    icon: <GrUserSettings key="customerSetting" />,
  },
  {
    key: "feedback",
    value: "서비스 만족도 조사",
    icon: <AiOutlineFileText key="feedback" />,
  },
  {
    key: "logout",
    value: "로그아웃",
    icon: <AiOutlineLogout key="logout" />,
  },
];

export async function getServerSideProps() {
  const res = await fetch(`${API_BASE_URL}/profiles`, {
    cache: "no-store",
  });
  const data = await res.json();

  return { props: { data } };
}

interface MyPageProps {
  data: CustomerProfileRes;
}

const MyPage = ({ data }: MyPageProps) => {
  const { profile } = data;
  const isFeedBack = (key: string) => key === "feedback";

  return (
    <>
      <NicknameContainer>
        <Nickname>{profile.nickname}</Nickname>님
      </NicknameContainer>
      <NavContainer>
        {MYPAGE_NAV_OPTIONS.map((option) =>
          isFeedBack(option.key) ? (
            <FeedbackLink key={option.key} href={FEEDBACK_FORM_LINK}>
              <NavWrapper>
                {option.icon}
                {option.value}
              </NavWrapper>
            </FeedbackLink>
          ) : (
            <NavWrapper key={option.key}>
              {option.icon}
              {option.value}
            </NavWrapper>
          )
        )}
      </NavContainer>
    </>
  );
};

export default MyPage;

const NicknameContainer = styled.header`
  display: flex;
  height: 150px;
  padding: 80px 0 20px 30px;
  font-size: 14px;
  align-items: flex-end;
  border-bottom: 6px solid gray;
  background-color: #f7f7f7;
`;

const Nickname = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-right: 5px;
`;

const NavContainer = styled.ul`
  list-style-type: none;
`;

const NavWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 55px;
  border-bottom: 1px solid rgba(68, 108, 125, 0.3);
  padding: 0 25px;

  cursor: pointer;
`;

const FeedbackLink = styled.a`
  text-decoration: none;
  color: black;
`;
