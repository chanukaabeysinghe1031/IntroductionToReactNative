import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';

export default class App extends React.Component {
  render() {
    return (
      <RootView/>
    );
  }
}

const RootView = createStackNavigator({
  Home: {
    screen: HomePage 
  },
  Details: {
    screen: DetailsPage
  }
});
