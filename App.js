import { View, Text, Image } from "react-native";
import diamond from "./diamond.png";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F6292",
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "#fff",
        }}
      >
        I Am Rich
      </Text>
      <Image source={diamond} style={{ width: 300 }} />
    </View>
  );
};

export default App;
