import React from 'react';
import { StyleSpaceProps } from 'src/design-system';

import { Box } from '../primitive-components';

export interface CardProps extends StyleSpaceProps {
  height?: number;
  width?: number;
  flex?: number;
  flexDirection?: string;
  justifyContent?: string;
  alignItem?: string;
}

export const Card: React.SFC<CardProps> = props => (
  <Box
    bg="white.0"
    height={100}
    p={4}
    alignItems="center"
    justifyContent="center"
    border={1}
    borderColor="white.2"
    borderRadius={3}
    {...props}
  />
);
