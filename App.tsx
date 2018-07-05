import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/design-system';
import { Text, Container } from 'src/core/components';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container>
            <Text>Open up App.ts to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Container>
        </ThemeProvider>
      </Provider>
    );
  }
}
