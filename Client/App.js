/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import HomeContainer from './src/container/Home/HomeContainer';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletContainer from './src/container/Wallet/WalletContainer';

import ChartContainer from './src/container/Chart/ChartContainer';
import PeopleContainer from './src/container/People/PeopleContainer';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeContainer} />
        <Tab.Screen name="Wallet" component={WalletContainer} />
        <Tab.Screen name="Chart" component={ChartContainer} />
        <Tab.Screen name="people" component={PeopleContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
