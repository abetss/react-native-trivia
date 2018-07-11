import { themeGet } from 'styled-system';
import { space } from './space';
import { width } from './width';

const fallbackColor = '#ff4136';

export const getThemeColor = (
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

export const getThemeSpacing = (index: number): number =>
  space[index] ? space[index] : index;

export const getThemeWidth = (index: number): number =>
  width[index] ? width[index] : index;
