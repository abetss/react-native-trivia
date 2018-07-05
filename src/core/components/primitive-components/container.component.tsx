import React from 'react';
import { Box } from './box.component';

export const Container = (props: any) => (
  <Box
    flex={1}
    bg="white.0"
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);
