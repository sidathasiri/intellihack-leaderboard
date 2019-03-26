import React, { Component } from "react";
import "./App.css";
import data from "./data.json";

import ListItem from "./Components/ListItem/ListItem";

class App extends Component {
  render() {
    return (
      <div>
        <img src="/syscoLABS.png" style={{ width: "20%", marginLeft: "78%" }} />
        <div className="container" style={{ marginTop: 50 }}>
          <img
            src="/intellihack.png"
            style={{ marginBottom: 20, marginLeft: 100 }}
          />
          <h1 style={{ marginLeft: 200, marginBottom: 30 }}>
            Dengue Disease Prediction Challenge
          </h1>
          <h2>Leaderboard</h2>
          <div className="list-group">
            {data.map((item, index) => {
              return <ListItem rank={index} data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
