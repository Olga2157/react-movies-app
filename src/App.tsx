import React from "react";
import "./App.css";
import { HelloWorld1 } from "./components/task1/HelloWorld1";
import { HelloWorld2 } from "./components/task1/HelloWorld2";
import { HelloWorld3 } from "./components/task1/HelloWorld3";
import HelloWorld4 from "./components/task1/HelloWorld4";

class App extends React.Component {

  render() {
    return <div>
      <HelloWorld1/> 
      <HelloWorld2/> 
      <HelloWorld3/>
      <HelloWorld4/>
    </div>
  }
}

export default App;
