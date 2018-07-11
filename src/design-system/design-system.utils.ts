import { theme } from './theme';
import { themeGet } from 'styled-system';

const fallbackColor = '#ff4136';

export const themeColorGet = (
  props: any,
  property: 'color' | 'bg',
  defaultColorCode: string,
) => {
  const defaultColor = themeGet(`colors.${defaultColorCode}`, fallbackColor)(
    props,
  );
  return props[property]
    ? themeGet(`colors.${props[property]}`, defaultColor)(props)
    : defaultColor;
};

export const getThemeSpace = (index: number): number =>
  theme.space[index] ? theme.space[index] : index;

export const getThemeWidth = (index: number): number =>
  theme.width[index] ? theme.width[index] : index;

export const getThemeFontSize = (index: number): number =>
  theme.fontSizes[index] ? theme.fontSizes[index] : index;
