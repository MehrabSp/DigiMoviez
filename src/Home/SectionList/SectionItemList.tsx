import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
// import { Image } from "expo-image";

// const blurhash =
//   "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const SectionItemList = ({ item }) => {
  //   console.log(item.title);
  return (
    <>
      <View
        style={{
          backgroundColor: "grey",
          height: 500,
          width: "84%",
          borderRadius: 10,
          marginHorizontal: "8%",
          top: -15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ position: "absolute" }}>
          <AntDesign name="picture" size={135} color="#f0f0f0" />
        </View>
        <Image
          source={{
            uri: item.poster,
          }}
          // srcSet=""
          style={{
            height: 500,
            width: "100%",
            resizeMode: "cover",
            //   resizeMode: "contain",
            borderRadius: 10,
            //   marginHorizontal: "1%",
            //   top: -15,
          }}
        />
      </View>

      {/* <Image
        style={{
            height: 500,
            width: "84%",
            position: "relative",
            borderRadius: 10,
            marginHorizontal: "8%",
            top: -15,
          }}
        source={{uri: item.poster}}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      /> */}
      <View
        style={{
          width: "90%",
          borderRadius: 10,
          marginHorizontal: "5%",
          backgroundColor: "#2d2d2d",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>مشاهده تریلر</Text>
      </View>
      <View
        style={{
          width: "90%",
          marginTop: 50,
          marginHorizontal: "5%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          {item.title} دانلود فیلم
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 13,
          marginRight: 10
        }}
      >
        <Text style={{ color: "white", fontSize: 15, marginRight: 6 }}>
          کیفیت : 1080 WEB-DL
        </Text>
        <AntDesign name="Safety" size={24} color="#eb8307" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 13,
          marginRight: 10
        }}
      >
        <Text style={{ color: "white", fontSize: 15, marginRight: 6 }}>
          زمان : 119 دقیقه
        </Text>
        <AntDesign name="aliwangwang" size={24} color="#eb8307" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 13,
          marginRight: 10
        }}
      >
        <Text style={{ color: "white", fontSize: 15, marginRight: 6 }}>
          ژانر : تاریخی, علمی, تخیلی
        </Text>
        <AntDesign name="meho" size={24} color="#eb8307" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 13,
          marginRight: 10
        }}
      >
        <Text style={{ color: "white", fontSize: 15, marginRight: 6 }}>
          کارگردان : Michal Kwiecinski
        </Text>
        <AntDesign name="areachart" size={24} color="#eb8307" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 13,
          marginRight: 10
        }}
      >
        <Text style={{ color: "white", fontSize: 15, marginRight: 6 }}>
          ستارگان : Lana Rhoades, Anna De Armas, Scarllet Johanson
        </Text>
        <AntDesign name="QQ" size={24} color="#eb8307" />
      </View>

      <View style={{ margin: 20, marginBottom: 0, alignItems: "center" }}>
        <Text style={{ fontSize: 12, color: "white" }} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <View
          style={{
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row-reverse",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>ادامه / </Text>
          <Text style={{ fontSize: 20, color: "#eb8307" }}>دانلود</Text>
        </View>
        <View
          style={{
            margin: -45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Svg viewBox="0 0 110 27" width={125} height={120}>
            <Path
              d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z"
              fill="#000000"
              fillRule="evenodd"
              // stroke-width="500"
            />
          </Svg>
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: "#eb8307",
              transform: [{ rotate: "45deg" }],
              borderRadius: 7,
              position: "absolute",
              bottom: 36,
            }}
          />
          <View style={{ position: "absolute", zIndex: 5, bottom: 45 }}>
            <AntDesign name="download" size={22} color="white" />
          </View>
        </View>
      </View>
    </>
  );
};

export { SectionItemList };

const styles = StyleSheet.create({});
