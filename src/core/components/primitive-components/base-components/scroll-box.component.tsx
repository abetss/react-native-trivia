import styled from 'styled-components/native';
import {
  borderColor,
  borders,
  color,
  flex,
  height,
  space,
  width,
  borderRadius,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  alignItems,
  alignContent,
  flexWrap,
  flexDirection,
  flexBasis,
  justifySelf,
  alignSelf,
  position,
  zIndex,
  right,
  bottom,
  top,
  left,
} from 'styled-system';

export const ScrollBox = styled.ScrollView`
  ${color};
  ${space};
  ${width};
  /* layout */
  ${maxWidth};
  ${minWidth};
  ${height};
  ${maxHeight};
  ${minHeight};
  /* borders */
  ${borders};
  ${borderColor};
  ${borderRadius};
  /* flexbox */
  ${flex};
  ${alignItems};
  ${alignContent};
  ${flexDirection};
  ${flexBasis};
  ${justifySelf};
  ${alignSelf};
  ${flexWrap};
  /* position */
  ${position};
  ${zIndex};
  ${top};
  ${right};
  ${bottom};
  ${left};
`;

ScrollBox.displayName = 'ScrollBox';
