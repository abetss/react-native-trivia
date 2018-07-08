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
  textAlign,
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

// Todo: add types
export const Box = styled.View`
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

Box.displayName = 'Box';
