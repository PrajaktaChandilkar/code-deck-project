import React from "react";
import styled from "styled-components"
import ModalProvider from "./context/ModalContext";
import HomeScreen from "./screen/HomeScreen";


const App = () => {
  return (
    <div>
      <ModalProvider>
        <HomeScreen />
      </ModalProvider>

    </div>
  )
}

export default App;