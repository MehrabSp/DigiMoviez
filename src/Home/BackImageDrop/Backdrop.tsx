import React from "react";
import { FlatList, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ITEM_SIZE, BACKDROP_HEIGHT, width } from "../../utils/cc";
import { Item } from "./Item";

const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          //   const translateX = scrollX.interpolate({
          //     inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
          //     outputRange: [0, width],
          //     // extrapolate:'clamp'
          //   });
          const translateX = scrollX.interpolate({
            inputRange: [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ],
            outputRange: [-width, 0, width],
            // extrapolate:'clamp'
          });
          return <Item translateX={translateX} imageUri={item.backdrop} />;
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
};

export default Backdrop;
