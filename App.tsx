import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./src/view/screens/home_screen/home_screen";

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaProvider style={styles.container}>
        <HomeScreen />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
