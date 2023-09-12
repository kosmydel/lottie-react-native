import React from "react";
import { ViewProps } from "react-native";
import type { LottieViewProps } from '../types';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = LottieViewProps & { containerProps?: ViewProps };

function LottieView(props: Props) {
    return (
        <Player
            autoplay={props.autoPlay}
            loop={props.loop}
            src={props.source}
            />
    );
}

export { LottieView };