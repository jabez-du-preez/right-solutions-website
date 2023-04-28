import React from "react";
import Routers from "./Routers";
import { TitleProvider } from "./store/titleContext";

function App() {
  return (
    <TitleProvider>
      <Routers />
    </TitleProvider>
  );
}

export default App;
