import {
  View,
  Pressable,
  // Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useRef, useState, useEffect, memo, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import { imageH, imageW, width } from "../../utils/cc";

// const _spacing = 10;

const SectionItemEndScroll = memo(function ({ movies }: any) {
  const ref = useRef(null);
  const [index, setIndex] = useState<number>(0);

  const handleSetIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex <= movies.length - 2) {
      scrollTo(newIndex);
    } else {
      setIndex(0);
    }
  };

  const handleScrollEnd = (event) => {
    const res = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(res + 1);
  };

  function scrollTo(index: number) {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      // viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : _spacing,
      // viewPosition,
    });
  }

  useEffect(() => {
    console.log("new", index);
  }, [index]);

  // function plus() {
  //   handleSetIndex(index + 1);
  //   setIndex((pv) => pv + 1);
  // }
  const plus = useCallback(() => {
    handleSetIndex(index + 1);
    setIndex((pv) => pv + 1);
  }, [index]);
  const minus = useCallback(() => {
    handleSetIndex(index - 1);
    setIndex((pv) => pv - 1);
  }, [index]);
  // function minus() {
  //   handleSetIndex(index - 1);
  //   setIndex((pv) => pv - 1);
  // }

  return (
    <View style={styles.container}>
      {/* <View
          style={{
            
            // justifyContent: "center",
            // height: "100%",
            // width: "100%",
            // zIndex: 1,
            backgroundColor: 'white',
            
          }}
        >
          <View
            style={{ position: "absolute",flexDirection: "row", justifyContent: "space-between" }}
          > */}
      <Pressable
        style={{ position: "absolute", left: 0, top: "50%", zIndex: 5 }}
        onPress={minus}
      >
        <AntDesign name="arrowleft" size={30} color="#eb8307" />
      </Pressable>
      <Pressable
        style={{ position: "absolute", right: 0, top: "50%", zIndex: 5 }}
        onPress={plus}
      >
        <AntDesign name="arrowright" size={30} color="#eb8307" />
      </Pressable>
      {/* </View>
        </View> */}
      <FlatList
        // showsHorizontalScrollIndicator={false}
        data={movies}
        onMomentumScrollEnd={handleScrollEnd}
        ref={ref}
        // initialScrollIndex={index}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={16} //FPS?
        decelerationRate={"fast"}
        // style={{ marginHorizontal: "-5%",  }}
        // bounces={false}
        removeClippedSubviews
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return;
          }
          return (
            <View style={styles.item}>
              <Image source={{ uri: item.poster }} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
});

export { SectionItemEndScroll };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
  image: {
    width: imageW,
    height: imageH,
    resizeMode: "cover",
    borderRadius: 16,
  },
});
