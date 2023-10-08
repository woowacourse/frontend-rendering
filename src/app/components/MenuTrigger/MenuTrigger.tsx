import color from '@/styles/color';
import Typography from '@/components/Typography/Typography';
import UserProfileIcon from '@/icons/UserProfileIcon';
import styled from '@emotion/styled/macro';

const MenuTrigger = () => {
  return (
    <Layout>
      <Typography variant="p3">GUEST</Typography>
      <GuestProfileWrapper>
        <UserProfileIcon color={color.neutral[800]} />
      </GuestProfileWrapper>
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

const GuestProfileWrapper = styled.div`
  padding: 2px;
  background-color: ${color.neutral[100]};
  border-radius: 50%;
`;
