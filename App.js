import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Components/MainScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(AppStackNavigator);

//export default AppContainer;
