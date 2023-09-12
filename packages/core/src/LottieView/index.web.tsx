import React from 'react';
import { ViewProps } from 'react-native';
import type { LottieViewProps } from '../types';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = LottieViewProps & { containerProps?: ViewProps };

function LottieView(props: Props) {
  const { source } = props;
  let isLottie = false;
  let filename = '';
  if (typeof source === 'string') {
    if (source.includes('.lottie')) {
      isLottie = true;
    }
    filename = source;
  }

  if (isLottie) {
    return (
      <DotLottiePlayer
        autoplay={props.autoPlay}
        loop={props.loop}
        // @ts-ignore
        src={props.source}
        onEvent={(event) => {
          console.log('DotLottie', event);
        }}
      />
    );
  }
  return (
    <Player autoplay={props.autoPlay} loop={props.loop} src={props.source} />
  );
}

export { LottieView };
