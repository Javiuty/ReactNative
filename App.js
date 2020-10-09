import React from "react";
import GlobalStyles from "./GlobalStyles";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View styles={styles.container}>
        <Text style={styles.text}>Here are some boxes of different color</Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
 });

export default App;
