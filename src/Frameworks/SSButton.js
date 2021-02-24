import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
//TODO: Known bug: This files needs to be saved to see the button colors. To check in prod more
const SSButton = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    disabled={props.disabled}
    style={
      [props.primary
        ? styles.appButtonContainerPrimary
        : props.secondary
        ? styles.appButtonContainerSecondary
        : styles.appButtonContainerDefault,
      {backgroundColor: props.filled?primaryShade2:'transparent', ...props.style},]
    }
  >
    <Text
      style={
        props.primary
          ? styles.appButtonTextPrimary
          : props.secondary
          ? styles.appButtonTextSecondary
          : styles.appButtonTextDefault
      }
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainerPrimary: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: global.primaryShade2,
  },
  appButtonTextPrimary: {
    fontFamily: 'Inter',
    fontSize: global.caption1Size,
    fontWeight: 'bold',
    color: global.PrimaryColor,
    alignSelf: 'center',
  },
  appButtonContainerSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: global.secondaryColorShade2,
  },
  appButtonTextSecondary: {
    fontFamily: 'Inter',
    fontSize: global.caption1Size,
    fontWeight: 'bold',
    color: global.secondaryColor,
    alignSelf: 'center',
  },
  appButtonContainerDefault: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: global.primaryShade2,
  },
  appButtonTextDefault: {
    fontFamily: 'Inter',
    fontSize: global.caption1Size,
    color: global.textColorDark,
    alignSelf: 'center',
  },
});

export default SSButton;
