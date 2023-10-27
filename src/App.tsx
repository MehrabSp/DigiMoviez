import { ScrollView, Dimensions } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import {
  Section,
  SectionBox,
  SectionList,
  SectionEnd,
  SectionEndScroll,
  Header,
} from "./Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMovies } from "./model/api";
// import Backdrop from "./Home/BackImageDrop/Backdrop";
import { Loading } from "./Home/Loading/Loading";
// import BottomSheet, {
//   BottomSheetRefProps,
// } from "./src/Home/ScrollAnimation/Sheet/ScrollAnimation";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import NetworkCheck from "./src/Home/Exception/NetworkCheck";

const { height } = Dimensions.get("screen");

function App() {
  const [movies, setMovies] = useState([]);
  const scrollViewRef = useRef(null);

  // const ref = useRef<BottomSheetRefProps>(null);

  //   const onPress = useCallback(() => {
  //   const isActive = ref?.current?.isActive();
  //   if (isActive) {
  //     ref?.current?.scrollTo(0);
  //   } else {
  //     ref?.current?.scrollTo(MAX_TRANSLATE_Y);
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([{ key: "empty-left" }, ...movies, { key: "empty-right" }]);
    };

    console.log("edit movie");

    if (movies.length === 0) {
      fetchData(); //movies
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  const handleScroll = (e: any) => {
    // scrollViewRef.current.flashScrollIndicators();
    console.log(
      "on scroll",
      (height * Math.round(e.nativeEvent.contentOffset.y)) / 30
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#050505" }}>
      <ScrollView
        ref={scrollViewRef}
        // onScroll={handleScroll}
        keyboardDismissMode="on-drag"
        persistentScrollbar
        onLayout={(e) => console.log("e", e.nativeEvent.layout)}
      >
        <Header />

        <Section movies={movies} />

        <SectionBox />

        <SectionList movies={movies} />

        <SectionEnd movies={movies} />

        <SectionEndScroll movies={movies} />
      </ScrollView>
    </SafeAreaView>

    //     {/* <GestureHandlerRootView style={{ flex: 1 }}>
    //     <NetworkCheck />
    //     <Backdrop movies={movies} scrollX={scrollX} />
    //     <HorizontalList scrollX={scrollX} movies={movies} />
    //     <BottomSheet ref={ref}>
    //       <View
    //         style={{
    //           // position: "absolute",
    //           // zIndex: 999,
    //           // top: "67%",
    //           // height: "33%", //top -> height
    //           // width: "100%",
    //           backgroundColor: "#666",
    //           marginTop: 20,
    //           marginHorizontal: 20,
    //           // flex: 1,
    //         }}
    //       >
    //         <FlatList
    //           data={numb}
    //           keyExtractor={(item) => item.toString()}
    //           renderToHardwareTextureAndroid
    //           // style={{position: 'absolute', zIndex: 999}}
    //           contentContainerStyle={{ alignItems: "center" }}
    //           onScroll={() => console.log("scroll ://")}
    //           renderItem={({ item, index }) => {
    //             return <Text>{item}</Text>;
    //           }}
    //         />
    //       </View>
    //     </BottomSheet>
    //   </GestureHandlerRootView> */}
  );
}

export default App;
