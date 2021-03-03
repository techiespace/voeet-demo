import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { LoginScreenStyles } from './loginScreenStyles';
import { VoxeetSDK } from '@voxeet/react-native-voxeet-conferencekit';


const loadCall = async () => {
  const isHermes = () => !!global.HermesInternal;
  console.log('Voxeet test issue hermes: ', isHermes());
  await VoxeetSDK.initialize(
    '<consumer_key>',
    '<consumer_secret>'
  );
  await VoxeetSDK.connect({
    externalId: 'test@gmail.com',
    name: 'test@gmail.com',
  });
  const conferenceAlias = `76099784248324_QA_streamstyle`.toLocaleLowerCase();
  const conference = await VoxeetSDK.create({ alias: conferenceAlias });
  console.log('voxeet debug conferenceAlias: ', conferenceAlias);
  console.log('voxeet debug conference: ', conference);
  const joined = await VoxeetSDK.join(conference.conferenceId, {
    constraints: {
      audio: true,
      video: true,
    },
  });
  console.log('voxeet debug joined: ', joined);
}

function LoginScreen(props) {
  useEffect(() => {
    loadCall().catch((e) => console.log('Voxeet join failed with error: ', e));
  }, []);

  return (
    <View style={LoginScreenStyles.LoginScreenContainer}>
      <Text>Expecting voxeet overlay</Text>
    </View>
  );
}

export default LoginScreen;
