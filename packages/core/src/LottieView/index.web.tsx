import React from "react";
import { Text, View, ViewProps } from "react-native";
import type { LottieViewProps } from '../types';

type Props = LottieViewProps & { containerProps?: ViewProps };

function LottieView(props: Props) {
    return (
        <View>
            <Text>LottieView placeholder :O</Text>
            <Text>isAutoplay: {props.autoPlay}</Text>
        </View>
    );
}

export { LottieView };