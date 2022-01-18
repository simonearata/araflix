import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import NetflixDash from "./components/root-navigator";
import HeaderProvider from "./netflix-provider/header-provider";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HeaderProvider>
          <Router>
            <NetflixDash />
          </Router>
        </HeaderProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
