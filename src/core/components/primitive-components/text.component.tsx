import styled from 'styled-components/native';
import {
  borderColor,
  borders,
  color,
  flex,
  fontSize,
  height,
  space,
  width,
  themeGet,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from 'styled-system';

export const Text = styled.Text`
  color: ${themeGet('colors.black.0')};
  ${color};
  ${space};
  ${width};
  /* typography */
  ${fontSize};
  ${fontFamily};
  ${textAlign};
  ${lineHeight};
  ${fontWeight};
  ${letterSpacing};
`;

Text.displayName = 'Text';
