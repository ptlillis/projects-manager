import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Header title='Project Manager'/>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;