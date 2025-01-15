import React from "react";
import { PaperProvider } from "react-native-paper";
import NavigationScreen from "./src/view/screens/navigation_screen/navigation_screen.tsx";
import mainTheme from "./src/app/theme/theme.ts";
import store from "./src/view/store/store.ts";
import {Provider} from "react-redux";
import {GestureHandlerRootView} from "react-native-gesture-handler";

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
          <PaperProvider theme={mainTheme}>
              <GestureHandlerRootView style={{flex: 1}}>
                  <NavigationScreen />
              </GestureHandlerRootView>
          </PaperProvider>
      </Provider>
  );
}

export default App;
