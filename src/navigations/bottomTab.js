import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import {hp, wp} from '../helpers/responsiveText';
import Home from '../screens/BottomTabNavigator/Home';
import CurrentLocation from '../screens/BottomTabNavigator/Location';
import RatedFood from '../screens/BottomTabNavigator/Rated';
import Profile from '../screens/BottomTabNavigator/Profile';
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};
const LocationStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="currentLocation" component={CurrentLocation} />
    </Stack.Navigator>
  );
};
const RatedFoodStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="ratedFood" component={RatedFood} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        tabStyle: {
          backgroundColor: '#FFFFFF',
          height: wp(16),
        },
        style: {
          // borderTopWidth: 0,
          elevation: 20,
          height: wp(16),
        },
      }}>
      <Tab.Screen
        name={'home'}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="feather"
              color={focused ? Colors.Primary : Colors.Placeholder}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'currentLocation'}
        component={LocationStack}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="enviromento"
              type="antdesign"
              color={focused ? Colors.Primary : Colors.Placeholder}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'ratedFood'}
        component={RatedFoodStack}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="hearto"
              type="antdesign"
              color={focused ? Colors.Primary : Colors.Placeholder}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Icon
              name="user"
              type="antdesign"
              color={focused ? Colors.Primary : Colors.Placeholder}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
