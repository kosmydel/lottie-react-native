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

  if (isLottie) {
    return (
      <DotLottiePlayer
        autoplay={props.autoPlay}
        loop={props.loop}
        // @ts-ignore
        src={realSource}
        onEvent={(event) => {
          console.log('DotLottie', event);
        }}
        {...otherProps}
      />
    );
  }
  return (
    <Player autoplay={props.autoPlay} src={source} {...otherProps} />
  );
}

export { LottieView };
