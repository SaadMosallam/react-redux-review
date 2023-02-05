import { Provider } from "react-redux";
import React from "react";
import CakeContainer from "src/components/CakeContainer";
import "./App.css";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
