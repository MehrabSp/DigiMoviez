import { Animated, Image } from "react-native";
import { BACKDROP_HEIGHT, height, width } from "../../utils/cc";

const Item = ({ translateX, imageUri }) => {
  return (
    <Animated.View
      removeClippedSubviews={false}
      style={{
        position: "absolute",
        // width: translateX,
        transform: [{ translateX }],
        width,
        height,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: imageUri }}
        style={{
          width,
          height: BACKDROP_HEIGHT,
          position: "absolute",
          resizeMode: "contain", //cover
          zIndex: -5,
        }}
      />
    </Animated.View>
  );
};

export {Item};
