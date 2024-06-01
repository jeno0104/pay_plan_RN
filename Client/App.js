/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import HomeContainer from './src/container/Home/HomeContainer';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletContainer from './src/container/Wallet/WalletContainer';
import ChartContainer from './src/container/Chart/ChartContainer';
import PeopleContainer from './src/container/People/PeopleContainer';
import LoginContainer from './src/container/Login/LoginContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import AppNavigator from './src/navigations/AppNavigator';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
