import React from 'react';
import { Provider } from 'react-redux';
import { store, AppNavigation } from 'src/app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/design-system';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppNavigation />
        </ThemeProvider>
      </Provider>
    );
  }
}
