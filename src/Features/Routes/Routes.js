import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/loginScreen';
import IntroScreens from '../Intro/IntroScreens';
const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Intro" headerMode="none">
      <Stack.Screen name="Intro" component={IntroScreens} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}

export { AppRoutes };
