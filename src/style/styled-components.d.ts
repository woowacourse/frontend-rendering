import theme from './theme.style';

type Theme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
