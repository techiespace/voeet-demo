import 'react-native-gesture-handler';
// Amplify //
import './src/Features/constants/consumer-variables.styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/Features/Routes/Routes';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
