import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home.component'; 
import { OptionScreen } from './option.component'; 
import { MessegeScreen } from './messege.component'; 

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none'  >
    <Screen name='Home' component={HomeScreen}/> 
    <Screen name='Option' component={OptionScreen}  /> 
    <Screen name='Messege' component={MessegeScreen}  /> 
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer >
    <HomeNavigator/>
  </NavigationContainer>
);
