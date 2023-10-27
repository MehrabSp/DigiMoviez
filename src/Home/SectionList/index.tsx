import { View } from "react-native";
import { SectionItemList } from "./SectionItemList";
import { memo } from "react";

const SectionList = memo(function ({ movies }: any) {
  // const SectionList = ({ movies }) => {
  // مقدار اول و اخر نمایش داده نمیشود
  // در این دیتا مقدار اول و اخر کلید هست
  return (
    <>
      {movies.map((item: any, index: number) => {
        if (index !== 0 && index !== movies.length - 1) {
          return (
            <View
              key={item.key}
              style={{
                width: "90%",
                marginHorizontal: "5%",
                height: 1000,
                backgroundColor: "#242424",
                marginTop: 45,
                borderRadius: 10,
              }}
            >
              <SectionItemList item={item} />
            </View>
          );
        }
      })}
    </>
  );
});

export { SectionList };
