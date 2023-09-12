import {Button, SafeAreaView, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useState} from 'react';

const ANIMATIONS = [
  {
    name: 'switch.lottie',
    path: require('./animations/animation_lkekfrcl.lottie'),
  },
  {
    name: 'hero.json',
    path: require('./animations/hero.json'),
  },
];

const LottieAnimatedExample = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  const file = ANIMATIONS[0];
  console.log('animations', ANIMATIONS);
  console.log('file', typeof file);
  // print out the file contents
  console.log('file', file);

  const nextAnimation = () => {
    setAnimationIndex((animationIndex + 1) % ANIMATIONS.length);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fefae0'}}>
      <View style={{alignContent: 'center', alignItems: 'center', padding: 30}}>
        <Text style={{fontSize: 20, padding: 5, color: '#283618'}}>
          Animation ({animationIndex + 1} / {ANIMATIONS.length})
        </Text>
        <Text style={{fontSize: 24, padding: 5}}>
          {ANIMATIONS[animationIndex].name}
        </Text>
        <Button
          onPress={nextAnimation}
          title="Next animation"
          color="#606c38"
        />
      </View>
      <LottieView
        source={ANIMATIONS[animationIndex].path}
        autoPlay
        loop
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default LottieAnimatedExample;
