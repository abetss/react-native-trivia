import styled from 'styled-components/native';
import {
  color,
  fontSize,
  space,
  width,
  themeGet,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';

export const Text = styled.Text`
  color: ${themeGet('colors.black.0')};
  font-size: ${themeGet('fontSizes.3')};
  font-family: ${props =>
    props.fontWeight === 'bold'
      ? themeGet('fontFamily.bold')
      : themeGet('fontFamily.regular')};
  ${color};
  ${space};
  ${width};
  /* typography */
  ${fontSize};
  ${textAlign};
  ${lineHeight};
  ${letterSpacing};
`;

Text.displayName = 'Text';
