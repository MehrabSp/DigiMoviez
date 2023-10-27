import { View, Text } from "react-native";
import { SectionItemEnd } from "./SectionItemEnd";
import { AntDesign } from "@expo/vector-icons";
import { memo } from "react";

const SectionEnd = memo(function ({ movies }: any) {
  // const SectionEnd = memo(({ movies }) => {
  return (
    <>
      <View
        style={{
          width: "90%",
          marginHorizontal: "5%",
          height: 3500,
          backgroundColor: "#242424",
          marginTop: 45,
          borderRadius: 10,
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
            <Text style={{ color: "white", fontSize: 20 }}>سریال های</Text>
            <Text style={{ color: "white", marginLeft: 30 }}>بروز شده</Text>
          </View>
          <AntDesign name="videocamera" size={40} color="#eb8307" />
        </View>
        <SectionItemEnd movies={movies} />
      </View>
    </>
  );
});

export { SectionEnd };
