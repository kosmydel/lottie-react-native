import { Button, SafeAreaView, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useState } from 'react';

const ANIMATIONS = [
  require("./animations/hero.json"),
  require("./animations/Watermelon.json"),
  require("./animations/LottieLogo1.json"),
  require("./animations/PinJump.json"),
];

const LottieAnimatedExample = () => {

  const [animationIndex, setAnimationIndex] = useState(0);

  const nextAnimation = () => {
    setAnimationIndex((animationIndex + 1) % ANIMATIONS.length);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fefae0'}}>
      <View style={{alignContent: 'center', alignItems: 'center', padding: 30}}>
        <Text style={{fontSize: 24, padding: 5, color: '#283618'}}>Animation {animationIndex + 1} / {ANIMATIONS.length}</Text>
        <Button
          onPress={nextAnimation}
          title="Next animation"
          color="#606c38"
        />
      </View>
      <LottieView source={ANIMATIONS[animationIndex]} autoPlay loop style={{flex: 1}}/>
    </SafeAreaView>
  );
};

export default LottieAnimatedExample;
