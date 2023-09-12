import { Text, View } from 'react-native';
import TestView from 'lottie-react-native';

const LottieAnimatedExample = () => {

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Test</Text>
      <Text>Test2</Text>
      {/* <LottieView /> */}
      <TestView />
    </View>
  );
};

export default LottieAnimatedExample;
