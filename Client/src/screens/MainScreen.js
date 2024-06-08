import HomeContainer from '../container/Home/HomeContainer';
import PayContainer from '../container/Pay/PayContainer';
import ChartContainer from '../container/Chart/ChartContainer';
import MoreContainer from '../container/More/MoreContainer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import More from 'react-native-vector-icons/Feather';

import {Alert, Text, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function MainScreen() {
  const Tab = createBottomTabNavigator();
  const [userData, setUserData] = useState();
  const [missionData, setMissionData] = useState([]);

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
      tabBarOptions={{
        // showLabel: false,
        activeTintColor: 'black', // 선택된 탭의 아이콘 색상을 red로 변경
        inactiveTintColor: 'gray', // 선택되지 않은 탭의 아이콘 색상을 gray로 변경
        style: {
          backgroundColor: '#ffffff', // 탭 바 배경색을 흰색으로 변경
        },
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={25} color={color} />, // 아이콘 색상을 현재 탭의 색상으로 변경
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayContainer}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="wallet" size={25} color={color} />
          ), // 아이콘 색상을 현재 탭의 색상으로 변경
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartContainer}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="chart-line" size={25} color={color} />
          ), // 아이콘 색상을 현재 탭의 색상으로 변경
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreContainer}
        options={{
          tabBarIcon: ({color}) => (
            <More name="more-horizontal" size={25} color={color} />
          ), // 아이콘 색상을 현재 탭의 색상으로 변경
        }}
      />
    </Tab.Navigator>
  );
}
