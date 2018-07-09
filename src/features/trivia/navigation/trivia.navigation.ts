import { TriviaNavigationRoute } from './trivia.navigation.constants';
import { createStackNavigator } from 'react-navigation';
import { TriviaHomeScreen, TriviaQuizComponent } from '../screens';

export const TriviaNavigation = createStackNavigator(
  {
    [TriviaNavigationRoute.Home]: TriviaHomeScreen,
    [TriviaNavigationRoute.Quiz]: TriviaQuizComponent,
  },
  {
    headerMode: 'none',
    initialRouteName: TriviaNavigationRoute.Quiz,
  },
);
