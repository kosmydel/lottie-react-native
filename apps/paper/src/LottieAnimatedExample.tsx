import React from 'react';
import { Text, View } from 'react-native';
import { LottieView } from 'lottie-react-native';

const LottieAnimatedExample = () => {

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Test</Text>
      <LottieView />
    </View>
  );
};

export default LottieAnimatedExample;
