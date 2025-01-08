import React from "react";
import { PaperProvider } from "react-native-paper";
import NavigationScreen from "./src/view/screens/navigation_screen/navigation_screen.tsx";
import mainTheme from "./src/app/theme/theme.ts";

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={mainTheme}>
        <NavigationScreen />
    </PaperProvider>
  );
}

export default App;
