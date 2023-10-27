import { View, Text, Image } from "react-native";
import { memo } from "react";

const SectionItemEnd = memo(function ({ movies }: any) {
  // const SectionItemEnd = ({ movies }) => {
  {
    return movies.map((item: any, index: number) => {
      if (index !== 0 && index !== movies.length - 1) {
        return (
          <View key={item.key} style={{ marginTop: 20 }}>
            <Image
              source={{ uri: item.poster }}
              style={{
                height: index !== 1 ? 100 : 500,
                width: "94%",
                marginHorizontal: "3%",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                resizeMode: "cover",
              }}
            />
            <View
              style={{
                alignItems: "center",
                width: "94%",
                marginHorizontal: "3%",
                paddingVertical: 4,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: "#333",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>با زیرنویس فارسی اضافه شد</Text>
              <View
                style={{
                  borderRadius: 50,
                  backgroundColor: "#eb8307",
                  marginHorizontal: 5,
                }}
              >
                <Text style={{ color: "white" }}> 3 </Text>
              </View>
              <Text style={{ color: "white" }}>قسمت</Text>
            </View>
          </View>
        );
      }
    });
  }
});

export { SectionItemEnd };
