import 'react-native-gesture-handler';
import React, { Component, useEffect } from 'react';
import {
  View,
  Platform,
  NativeModules,
  PermissionsAndroid,
} from 'react-native';
import SSButton from '../../Frameworks/SSButton';
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;
const langcode = deviceLanguage.slice(0, 2);

const IntroScreens = (props) => {
  useEffect(() => {
    console.log('Introscreen loaded');
    requestMicPermission();
  }, []);

  const requestMicPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'App Mic Permission',
          message:
            'App needs access to your Mic ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Mic');
      } else {
        console.log('Mic permission denied');
      }
      const grantedCam = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message:
            'App needs access to your Camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (grantedCam === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View
      style={{
        position: 'absolute',
        top: '3%',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: '78%',
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <SSButton
          secondary
          style={{
            backgroundColor: global.PrimaryColor,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: global.PrimaryColor,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            marginLeft: 20,
            marginRight: 20,
            alignItems: 'center',
            width: '80%',
          }}
          onPress={() => {
            props.navigation.navigate('Login', {});
          }}
          title={'Next'}
        />
      </View>
    </View>
  );
};

export default IntroScreens;
