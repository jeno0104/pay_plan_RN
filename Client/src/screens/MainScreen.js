import HomeContainer from '../container/Home/HomeContainer';
import WalletContainer from '../container/Wallet/WalletContainer';
import ChartContainer from '../container/Chart/ChartContainer';
import PeopleContainer from '../container/People/PeopleContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Alert, Text, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
export default function MainScreen() {
  const Tab = createBottomTabNavigator();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getData = axios
      .get('http://10.0.2.2:3000/')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
    setUserData(getData);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#D9D9D9',
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletContainer}
        options={{
          tabBarIcon: () => <Icon name="wallet" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartContainer}
        options={{
          tabBarIcon: () => <Icon name="chart-line" size={25} color="black" />,
        }}
      />
      <Tab.Screen
        name="people"
        component={PeopleContainer}
        options={{
          tabBarIcon: () => <Ionicons name="people" size={25} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
