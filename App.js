import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";
import { persist, store } from "./src/store";

const App = () => {
  const { theme } = store.getState().root.core;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Navigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
