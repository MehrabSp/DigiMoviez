import { StyleSheet, View } from "react-native";
import { memo, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import NetInfo from "@react-native-community/netinfo";

const NetworkCheck = memo(function () {
  const [network, setNetwork] = useState(null);
  NetInfo.fetch().then((state) => {
    setNetwork(state.isConnected);
    console.log("Connection type", state.type);
  });
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 100,
        marginVertical: 30,
        marginHorizontal: 15,
      }}
    >
      {network ? (
        <Ionicons name="md-shield-checkmark-outline" size={30} color="green" />
      ) : (
        <AntDesign name="exclamationcircleo" size={24} color="red" />
      )}
    </View>
  );
});

export { NetworkCheck };

const styles = StyleSheet.create({});
