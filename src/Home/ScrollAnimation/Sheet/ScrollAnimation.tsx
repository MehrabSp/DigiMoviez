import { View, useWindowDimensions } from "react-native";
import React, { useCallback, useImperativeHandle } from "react";
import { useSharedValue, withTiming, Easing } from "react-native-reanimated";
// import useThemeColors from '../../hooks/Scheme/useColorScheme';
import ScrollSheet from "./ScrollSheet";
import ColorDropScreen from "./ColorDropScreen";
import { HEIGHT_BAR } from "../../../utils/cc";

type BottomSheetProps = {
  children?: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  function ({ children }, ref) {

    const { height: SCREEN_HEIGHT, width } = useWindowDimensions();
    const MAX_TRANSLATE_Y = -SCREEN_HEIGHT; // + 50

    const translateY = useSharedValue(-HEIGHT_BAR);
    const active = useSharedValue(false);
    const moveHandle = useSharedValue(-HEIGHT_BAR);

    const scrollTo = useCallback(function (destination: number) {
      "worklet";
      active.value = destination !== -HEIGHT_BAR;
      // translateY.value = withSpring(destination, { damping: 30, mass: 3, stiffness: 200, overshootClamping: false, restSpeedThreshold: 5 }); // HEIGHT_BAR
      translateY.value = withTiming(destination, {
        duration: 500,
        easing: Easing.bezier(0.1, 0.2, 0.25, 1),
      });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    return (
      <View style={{ flex: 1, position: 'absolute', bottom: 0, width: '100%' }}>
        <ColorDropScreen active={active} />
        <ScrollSheet
          translateY={translateY}
          moveHandle={moveHandle}
          scrollTo={scrollTo}
          SCREEN_HEIGHT={SCREEN_HEIGHT}
          width={width}
          MAX_TRANSLATE_Y={MAX_TRANSLATE_Y}
        >
          {children}
        </ScrollSheet>
      </View>
    );
  }
);

// const styles = StyleSheet.create({
//   imageContainer: {
//     height: "40%",
//     minHeight: HEIGHT_BAR,
//     minWidth: HEIGHT_BAR,
//     maxWidth: "100%",
//     maxHeight: "40%",
//     resizeMode: "center",
//     // marginHorizontal: 38, W2 / 10
//     // width: '80%',
//     // borderRadius: 40,
//     // marginTop: 50,
//   },
// });

export default BottomSheet;
