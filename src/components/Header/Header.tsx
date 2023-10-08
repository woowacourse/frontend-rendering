import { css, styled } from 'styled-components';
import Typography from '../Typography/Typography';
import color from '@/styles/color';
import Link from 'next/link';

const Header = () => {
  return (
    <Layout>
      <Link href="/">
        <Typography
          variant="h1"
          $style={css`
            display: inline;

            font-size: 4rem;
            font-weight: 200;
          `}
        >
          <Emphasis>하루</Emphasis>스터디
        </Typography>
      </Link>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  padding: 40px;

  display: flex;
`;

const Emphasis = styled.span`
  color: ${color.blue[500]};
`;
