import { useState } from "react";
import { css, styled } from "styled-components";

import Typography from "@/components/common/Typography/Typography";

import color from "@/styles/color";

const MenuTrigger = () => {
  const [profileImageLoading, setProfileImageLoading] = useState(true);

  return (
    <Layout>
      <Typography variant="p3">{"룩소"}</Typography>
      <UserProfileImage
        src={"https://lh3.googleusercontent.com/a/ACg8ocI_u4HWHGOL9lanuteoOxzvZ63GxUNvWdO2VVNcrjQ2=s288-c-no"}
        alt="사용자 프로필 이미지"
        $isLoading={profileImageLoading}
        onLoad={() => setProfileImageLoading(false)}
      />
    </Layout>
  );
};

export default MenuTrigger;

const Layout = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 10px;

  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 500;
  }

  svg {
    width: 34px;
    height: 34px;
  }
`;

type UserProfileImageProps = {
  $isLoading: boolean;
};

const UserProfileImage = styled.img<UserProfileImageProps>`
  width: 36px;
  height: 36px;

  border-radius: 50%;
`;
