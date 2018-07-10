import React from 'react';

import { Box } from './box.component';

// Todo: add types
export const Container = (props: any) => (
  <Box flex={1} bg="white.1" alignItems="center" p={0} {...props} />
);
