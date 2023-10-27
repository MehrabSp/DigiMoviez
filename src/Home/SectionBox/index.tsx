import { View, Text, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { memo, useState } from "react";

const SectionBox = memo(function () {
  const max = 2023;
  const min = 1888;
  const [value, setValue] = useState(max);
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <View
        style={{
          width: "90%",
          marginHorizontal: "5%",
          height: 1000,
          backgroundColor: "#242424",
          marginTop: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", marginTop: 12, fontSize: 20 }}>
            نوع
          </Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "#1c1c1c",
              width: "95%",
              height: 40,
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>فیلم</Text>
            <Text style={{ color: "white", fontSize: 20 }}>سریال</Text>
          </View>
        </View>

        <View style={{}}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 20,
              marginRight: 15,
            }}
          >
            کارگردان
          </Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "#1c1c1c",
              width: "94%",
              height: 45,
              paddingHorizontal: 15,
              marginTop: 10,
              marginHorizontal: "3%",
            }}
          >
            <TextInput
              editable
              // multiline
              numberOfLines={4}
              maxLength={40}
              // onChangeText={text => onChangeText(text)}
              // value={"value"}
              placeholder="Christopher Nolan"
              placeholderTextColor={"#898989"}
              style={{
                padding: 10,
                // backgroundColor: "black",
                color: "#898989",
                textAlign: "right",
                textAlignVertical: "top",
                fontSize: 12,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 20,
              marginRight: 15,
            }}
          >
            بازیگران
          </Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "#1c1c1c",
              width: "94%",
              height: 45,
              paddingHorizontal: 15,
              marginTop: 10,
              marginHorizontal: "3%",
            }}
          >
            <TextInput
              editable
              // multiline
              numberOfLines={4}
              maxLength={40}
              // onChangeText={text => onChangeText(text)}
              // value={"value"}
              placeholder="leonardo dicaprio"
              placeholderTextColor={"#898989"}
              style={{
                padding: 10,
                // backgroundColor: "black",
                color: "#898989",
                textAlign: "right",
                textAlignVertical: "top",
                fontSize: 12,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 20,
              marginRight: 15,
            }}
          >
            سال ساخت
          </Text>
          <Text style={{ color: "white" }}>{value}</Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "#1c1c1c",
              width: "94%",
              height: 45,
              paddingHorizontal: 15,
              marginTop: 10,
              marginHorizontal: "3%",
            }}
          >
            <Slider
              style={{ width: "100%", height: 40 }}
              step={1}
              onValueChange={setValue}
              minimumValue={min}
              maximumValue={max}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              thumbTintColor="#eb8307"
            />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 20,
              marginRight: 15,
            }}
          >
            کشور
          </Text>
          <Text style={{ color: "white" }}>{value}</Text>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: "#1c1c1c",
              width: "94%",
              height: 60,
              paddingHorizontal: 15,
              marginTop: 10,
              marginHorizontal: "3%",
            }}
          >
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item
                label="Java"
                value="java"
                style={{ color: "white" }}
              />
              <Picker.Item
                label="JavaScript"
                value="js"
                style={{ color: "white" }}
              />
            </Picker>
          </View>
        </View>
      </View>
    </>
  );
});

export { SectionBox };
