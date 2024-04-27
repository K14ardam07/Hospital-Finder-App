import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import AuthenticatedScreen from '../components/AuthenticatedScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AuthenticatedScreen" component={AuthenticatedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
