import {
  View,
  Animated,
  Easing,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LoaderIcon from './assets/loader.svg';
const Loader = (props) => {
  var spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();
  return props.simple ? (
    <View style={[styles.container, styles.horizontal]}>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <ActivityIndicator
          size="large"
          color={props.primary ? global.PrimaryColor : global.secondaryColor}
        />
      </View>
    </View>
  ) : (
    <Animated.View
      style={{ width: 80, height: 80, transform: [{ rotate: spin }] }}
    >
      <LoaderIcon />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    opacity: 0.7,
    //height: '100%',
    borderRadius: 12,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
