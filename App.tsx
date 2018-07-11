import React from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';

import { store, AppNavigation } from 'src/app/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/design-system';

export default class App extends React.Component<{}> {
  public state = {
    appIsReady: false,
  };

  public componentWillMount() {
    this.loadAssetsAsync();
  }

  public render() {
    return this.state.appIsReady ? (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppNavigation />
        </ThemeProvider>
      </Provider>
    ) : (
      <AppLoading />
    );
  }

  private async loadAssetsAsync() {
    try {
      await Font.loadAsync({
        'open-sans-bold': require('src/assets/fonts/OpenSans-Bold.ttf'),
        'open-sans': require('src/assets/fonts/OpenSans-Regular.ttf'),
      });
    } finally {
      this.setState({ appIsReady: true });
    }
  }
}
