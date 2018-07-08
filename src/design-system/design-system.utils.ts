import { themeGet } from 'styled-system';

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
