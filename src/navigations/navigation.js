import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash/Main';
import Login from '../screens/Auth/Login';
import CreateAccount from '../screens/Auth/CreateAccount';
import VarifyMobileCode from '../screens/Auth/VarifyMobileCode';
import ResetPassword from '../screens/Auth/ResetPassword';
import UserLocation from '../screens/Auth/UserLocation';
import BottomTab from './bottomTab';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="splash">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
        <Stack.Screen name="varifyMobileCode" component={VarifyMobileCode} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="userLocation" component={UserLocation} />
        <Stack.Screen name="bottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
