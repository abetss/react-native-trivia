import { createStackNavigator } from 'react-navigation';
import { TriviaHomeComponent, TriviaQuizComponent } from '../screens';

export const TriviaNavigation = createStackNavigator(
  {
    home: TriviaHomeComponent,
    quiz: TriviaQuizComponent,
  },
  {
    headerMode: 'none',
  },
);
