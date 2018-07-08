import styled from 'styled-components/native';
import {
  color,
  fontSize,
  space,
  width,
  themeGet,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from 'styled-system';

// Todo: add types
export const Text = styled.Text`
  color: ${themeGet('colors.black.0')};
  font-size: ${themeGet('fontSizes.3')};
  font-weight: ${themeGet('fontWeights.3')};
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
