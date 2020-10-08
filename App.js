import React from "react";
import GlobalStyles from "./GlobalStyles";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingVertical: 30,
    backgroundColor: "teal",
    borderColor: "pink",
    borderWidth: 1,
  },
});

export default App;
