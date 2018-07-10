import React from 'react';
import { StyleSpaceProps } from 'src/design-system';

import { Box } from '../primitive-components';

export const Card: React.SFC<StyleSpaceProps> = props => (
  <Box
    bg="white.0"
    height={260}
    width={320}
    p={4}
    alignItems="center"
    justifyContent="center"
    border={1}
    borderColor="white.2"
    borderRadius={3}
    {...props}
  />
);
