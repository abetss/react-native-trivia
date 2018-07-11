import { TriviaNavigationRoute } from './trivia.navigation.constants';
import { createStackNavigator } from 'react-navigation';
import {
  TriviaHomeScreen,
  TriviaQuizScreen,
  TriviaSummaryScreen,
} from '../screens';

export const TriviaNavigation = createStackNavigator(
  {
    [TriviaNavigationRoute.Home]: TriviaHomeScreen,
    [TriviaNavigationRoute.Quiz]: TriviaQuizScreen,
    [TriviaNavigationRoute.Summary]: TriviaSummaryScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: TriviaNavigationRoute.Home,
  },
);
