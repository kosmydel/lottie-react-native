import React, { forwardRef } from 'react';
import { ViewProps } from 'react-native';
import type { LottieViewProps } from '../types';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Player } from '@lottiefiles/react-lottie-player';
import { parsePossibleSources } from './utils';

type Props = LottieViewProps & { containerProps?: ViewProps };

const LottieView = forwardRef((props: Props, ref: any) => {
  const { source } = props;

  const sources = parsePossibleSources(source);
  const isLottie = sources.sourceName?.includes('.lottie') || !!sources.sourceDotLottieURI;
  const lottieSource = sources.sourceDotLottieURI || sources.sourceName;

  const handleEvent = (event) => {
    if (event === 'error') {
      props.onAnimationFailure?.('error');
    }
    if (event === 'complete') {
      props.onAnimationFinish?.(false);
    }
    if (event === 'stop') {
      props.onAnimationFinish?.(true);
    }
  };

  if (isLottie) {
    return (
      <DotLottiePlayer
        lottieRef={ref}
        src={lottieSource}
        onEvent={handleEvent}
        autoplay={props.autoPlay}
        speed={props.speed}
        loop={props.loop}
      />
    );
  }
  return (
    <Player
      ref={ref}
      src={source}
      onEvent={handleEvent}
      autoplay={props.autoPlay}
      speed={props.speed}
      loop={props.loop}
    />
  );
});

export { LottieView };
