import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const ColorDropScreen = ({ active }) => {
  const rBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active.value ? 1 : 0),
    };
  }, []);

  const rBackdropProps = useAnimatedProps(() => {
    return {
      pointerEvents: active.value ? "auto" : "none",
    } as any;
  }, []);

  return (
    <Animated.View
      // onTouchStart={() => {
      //   // Dismiss the BottomSheet
      //   scrollTo(-HEIGHT_BAR);
      // }}
      animatedProps={rBackdropProps}
      style={[
        {
          // ...StyleSheet.absoluteFillObject,
          // // backgroundColor: "rgba(0,0,0,0.4)",
          // position: "absolute", flex: 1, width: "100%", bottom: 0 ,
          backgroundColor: "#666",
            flex: 1,
          //   flexDirection: 'column',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          with: '100%',
          height: "100%",
          zIndex: 99,
        },
        //   rBackdropStyle,
      ]}
    />
  );
};

export default ColorDropScreen;
