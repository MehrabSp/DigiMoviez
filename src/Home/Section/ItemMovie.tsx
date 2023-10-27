import { StyleSheet, Text, View, Image } from "react-native";
import { memo } from "react";
import { ITEM_SIZE, SPACING } from "../../utils/cc";
import { Genres } from "./Genres";
import { Rating } from "./Rating";
// import { ExceptionErrorModal } from "../Exc/ExceptionErrorModal";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { width } from "../../utils/cc";

const ItemMovie = memo(function ({ scrollX, index, item }: any) {
  const inputRange = [
    (index - 2) * ITEM_SIZE,
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
  ];

  // translateY ارتفاع View
  // translateX ...
  const animatedStyleY = useAnimatedStyle(function () {
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [100, 50, 100],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }],
    };
  });
  const animatedStyleX = useAnimatedStyle(function () {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [-width * 0.11, 0, width * 0.11], // 0.2 better
      Extrapolate.EXTEND //CLAMP
    );
    return {
      transform: [{ translateX }],
    };
  });

  function handleError({ nativeEvent: { error } }) {
    console.log("eror!");
    // ExceptionErrorModal({tr: true})
  }

  return (
    <View style={{ width: ITEM_SIZE }}>
      <Animated.View
        style={[
          {
            marginHorizontal: SPACING,
            // padding: SPACING * 1.5, //2
            alignItems: "center",
            // transform: [{ translateY }],
            // height: translateY,
            backgroundColor: "whitesmoke",
            borderRadius: 34,
            overflow: 'hidden', // for Animated.image
            borderWidth: SPACING * 1.5,
            borderColor: 'white'
          },
          animatedStyleY,
        ]}
      >
        <Animated.Image
          crossOrigin="anonymous"
          loadingIndicatorSource={{
            uri: "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg",
          }}
          onLoad={({
            nativeEvent: {
              source: { width, height },
            },
          }) => console.log({ width, height })}
          onError={handleError}
          onProgress={({ nativeEvent: { loaded, total } }) => {
            console.log(loaded, "ll");
            console.log(total, "tot");
          }}
          progressiveRenderingEnabled
          source={{ uri: item.poster }}
          style={[styles.posterImage, animatedStyleX]}
        />
        <Text style={{ fontSize: 24 }} numberOfLines={1}>
          {item.title}
        </Text>
        <Rating rating={item.rating} />
        <Genres genres={item.genres} />
        <Text style={{ fontSize: 12 }} numberOfLines={3}>
          {item.description}
        </Text>
      </Animated.View>
    </View>
  );
});

export { ItemMovie };

const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: ITEM_SIZE, // * 1.2
    resizeMode: "cover", //cover
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
    backgroundColor: "#e1e4e8",
  },
});
