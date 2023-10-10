import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyles from '../../styles/GlobalStyles';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
