import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home } from './Home';
import { Car } from './Car';

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: Home,
  },
  Car: {
    screen: Car
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}