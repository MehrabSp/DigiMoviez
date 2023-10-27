import { View, Platform, FlatList } from "react-native";
import { ItemMovie } from "./ItemMovie";
import { ITEM_SIZE, EMPTY_ITEM_SIZE } from "../../utils/cc";
import { memo } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

const AnimatedList = Animated.createAnimatedComponent(FlatList);

const HorizontalList = memo(function ({ movies }: any) {
  const scrollX = useSharedValue(0);

  const handler = useAnimatedScrollHandler({
    onScroll: function (event) {
      "worklet";
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <AnimatedList
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={(item: any) => item.key}
      horizontal
      // bounces={true} //false
      // decelerationRate={Platform.OS === "ios" ? 0 : 0.98} //0.666
      decelerationRate={'normal'}
      renderToHardwareTextureAndroid
      contentContainerStyle={{ marginTop: 0, paddingBottom: 100 }} // alignItems: "center" <- Center back drop
      snapToInterval={ITEM_SIZE}
      snapToAlignment="start"
      onScroll={handler}
      scrollEventThrottle={16} //FPS?
      renderItem={({ item, index }: any) => {
        if (!item.poster) {
          return <View style={{ width: EMPTY_ITEM_SIZE }} />;
        }

        return <ItemMovie scrollX={scrollX} index={index} item={item} />;
      }}
    />
  );
});

export { HorizontalList };
