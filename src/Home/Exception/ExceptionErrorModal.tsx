import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  // Ionicons,
  // EvilIcons,
  // MaterialIcons,
  // MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ExceptionErrorModal = memo(function ({ hide, error, colorStatus }: any) {
  return (
    <>
      <StatusBar
        backgroundColor={colorStatus}
        style={"auto"}
        animated
        networkActivityIndicatorVisible
        hideTransitionAnimation="fade"
        hidden={hide}
      />
      {error ? (
        <>
          {/* // <Text
        //   style={{ color: "red", top: 50, position: "absolute", zIndex: 100 }}
        // >
        //   ExceptionErrorModal
        // </Text> */}
          <SafeAreaView
            style={{
              top: 0,
              zIndex: 100,
              backgroundColor: colorStatus,
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "black", fontFamily: "monogeb", fontSize: 17 }}
            >
              اتصال خود را بررسی کنید
            </Text>
          </SafeAreaView>
          <View style={{ top: 70, position: "absolute", zIndex: 100 }}>
            <AntDesign name="exclamation" size={40} color="red" />
          </View>
        </>
      ) : null}
    </>
  );
});

export { ExceptionErrorModal };

const styles = StyleSheet.create({});
