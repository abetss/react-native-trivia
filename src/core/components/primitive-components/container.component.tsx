import React from 'react';

import { Box } from './base-components/box.component';

export const Container = (props: any) => (
  <Box flex={1} bg="white.1" flexDirection="column" p={0} {...props} />
);
