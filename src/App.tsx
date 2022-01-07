import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import NetflixDash from "./components/root-navigator";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <NetflixDash />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
