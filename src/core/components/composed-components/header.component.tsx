import React from 'react';
import { StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Box } from '../primitive-components';

export const Header: React.SFC = props => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <Box
      bg="red.0"
      height={150}
      pt={Constants.statusBarHeight}
      pb={3}
      px={2}
      alignItems="center"
      justifyContent="flex-end"
      {...props}
    />
  </React.Fragment>
);
