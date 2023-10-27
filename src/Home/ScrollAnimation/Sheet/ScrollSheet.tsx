import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import { Gesture } from "react-native-gesture-handler";
import { HEIGHT_BAR, BORDER_RADUIS_BAR } from "../../../utils/cc";

type rType = {
  borderTopEndRadius: number;
  borderTopStartRadius: number;
  height: number;
};

export default function ScrollSheet({
  translateY,
  moveHandle,
  scrollTo,
  children,
  SCREEN_HEIGHT,
  width,
  MAX_TRANSLATE_Y,
}) {
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      // اگر Y مثبت باشد یعنی به سمت پایین حرکت داده میشود. ||
      // اگر Y منفی باشد یعنی به سمت بالا حرکت داده میشود
      translateY.value = event.translationY + context.value.y;
      moveHandle.value = event.translationY;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 5 || moveHandle.value > 0) {
        scrollTo(-HEIGHT_BAR); // 0
      } else if (
        translateY.value < -SCREEN_HEIGHT / 2 ||
        moveHandle.value < 0
      ) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle((): rType => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y, HEIGHT_BAR + BORDER_RADUIS_BAR], // [MAX_TRANSLATE_Y + 70, MAX_TRANSLATE_Y],
      [50, 0], // -HEIGHT_BAR
      Extrapolate.CLAMP
    );

    return {
      // borderRadius,
      borderTopEndRadius: borderRadius,
      borderTopStartRadius: borderRadius,
      // transform: [{ translateY: translateY.value }],
      height: Math.abs(translateY.value),
    };
  });

  return (
    <View style={{ position: "absolute", flex: 1, width: "100%", bottom: 0 }}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            styles.bottomSheetContainer,
            rBottomSheetStyle,
            { left: width > 500 ? "20%" : 0, maxHeight: SCREEN_HEIGHT },
            //   {backgroundColor: colors.Footer},
            { backgroundColor: "red" },
          ]}
        >
          {/* <Pressable onPress={() => {
          scrollTo(MAX_TRANSLATE_Y);
        }}> */}
          {/* </Pressable> */}

          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    // height: H2, // SCREEN_HEIGHT
    width: "100%",
    maxWidth: 500,
    minHeight: HEIGHT_BAR,
    // position: "absolute",
    // top: H2 - HEIGHT_BAR - 10,
    // borderRadius: 30,
  },
});
