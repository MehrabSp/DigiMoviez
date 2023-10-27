import { Text, View } from "react-native";
import { HorizontalList } from "./HorizontalList";
import { memo } from "react";

const Section = memo(function ({ movies }: any) {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#eb8307",
            borderRadius: 35,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 10,
            paddingRight: 10,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#eb8307",
            fontSize: 15,
          }}
        >
          فیلم های برگزیده
        </Text>
      </View>
      <View>
        <HorizontalList movies={movies} />
      </View>
    </>
  );
});

export { Section };
