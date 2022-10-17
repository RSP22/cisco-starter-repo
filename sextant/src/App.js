import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
class App extends Component {
  render() {
      return (
          <div className="App">

              <Banner />

              <div className="Exhibit_Container">

                  {/* Component should accept a prop that determines whether it requests an ipv4 address or an ipv6 address. */}
                  <Exhibit name="Exhibit container">
           
                  </Exhibit>

              </div>
          </div>
      );
  }
}

export default App;
