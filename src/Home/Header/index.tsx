import { Image, View, ImageBackground, Button, TextInput } from "react-native";
import { memo } from "react";

const Header = memo(function () {
  return (
    <>
      <Image
        source={require("../../../assets/img/digimovie.png")}
        style={{
          width: "70%",
          minHeight: 100,
          // height: 100,
          maxHeight: 200,
          marginHorizontal: "15%",
          resizeMode: "contain",
        }}
      />
      <ImageBackground
        source={require("../../../assets/img/back_one_head.png")}
        style={{
          width: 500,
          height: 500,
          position: "absolute",
          zIndex: -2,
        }}
      />
      <ImageBackground
        source={require("../../../assets/img/back_two_head.png")}
        style={{
          width: 500,
          height: 500,
          position: "absolute",
          zIndex: -5,
        }}
      />

      <View
        style={{
          marginTop: 30,
          flexDirection: "row-reverse",
          justifyContent: "space-around",
        }}
      >
        <Button title="ثبت نام" color={"grey"} />
        <Button title="وارد شوید" />
      </View>

      <View
        style={{
          marginTop: 20,
          backgroundColor: "rgba(34,34,34,.9)",
          height: 52,
          width: "100%",
        }}
      >
        <TextInput
          editable
          // multiline
          numberOfLines={4}
          maxLength={40}
          // onChangeText={text => onChangeText(text)}
          // value={"value"}
          placeholder="جستجو کنید ..."
          placeholderTextColor={"#898989"}
          style={{
            padding: 10,
            backgroundColor: "black",
            color: "#898989",
            textAlign: "right",
            textAlignVertical: "top",
            fontSize: 20,
          }}
        />
      </View>
    </>
  );
});

export { Header };
