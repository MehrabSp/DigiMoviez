import { View, Text } from "react-native";
import { SectionItemEndScroll } from "./SectionItemEndScroll";
import { AntDesign } from "@expo/vector-icons";
import { memo } from "react";

const SectionEndScroll = memo(function ({ movies }: any) {
  return (
    <>
      <View
        style={{
          width: "100%",
          // marginHorizontal: "5%",
          height: 500,
          backgroundColor: "#242424",
          marginTop: 45,
          borderRadius: 10,
          //   position: 'absolute',
          //   bottom: 0
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={{ alignItems: "center", marginRight: 10 }}>
            <Text style={{ color: "white", fontSize: 20 }}>فیلم های</Text>
            <Text style={{ color: "white", marginLeft: 30 }}>دوبله فارسی</Text>
          </View>
          <AntDesign name="CodeSandbox" size={40} color="#eb8307" />
        </View>
        <SectionItemEndScroll movies={movies} />
      </View>
    </>
  );
});

export { SectionEndScroll };
