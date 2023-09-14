import React from 'react';
import { ViewProps } from 'react-native';
import type { LottieViewProps } from '../types';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = LottieViewProps & { containerProps?: ViewProps };

function LottieView(props: Props) {
  const { style, autoPlay, ...otherProps } = props;
  const { source } = props;
  let isLottie = false;
  let realSource = props.source;
  if (typeof source === 'string') {
    if (source.includes('.lottie')) {
      isLottie = true;
    }
  }

  if (typeof source === 'object' && (source as any).uri) {
    if ((source as any).uri.includes('.lottie')) {
      isLottie = true;
      realSource = (source as any).uri;
    }
  }

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
        autoplay={props.autoPlay}
        // @ts-ignore
        src={realSource}
        onEvent={handleEvent}
        {...otherProps}
      />
    );
  }
  return (
    <Player
      onEvent={handleEvent}
      autoplay={props.autoPlay}
      src={source}
      {...otherProps} />
  );
}

export { LottieView };
