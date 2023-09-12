import { SafeAreaView, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieAnimatedExample = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'cyan'}}>
        <Text>Test</Text>
        <Text>Test2</Text>
        <LottieView source={require("./animations/hero.json")} autoPlay loop style={{flex: 1}}/>
      </View>
    </SafeAreaView>
  );
};

export default LottieAnimatedExample;
