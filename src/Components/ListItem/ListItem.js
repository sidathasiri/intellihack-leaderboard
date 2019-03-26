import React, { Component } from "react";

export default class ListItem extends Component {
  getTrophies(i) {
    if (i == 1) {
      return (
        <span style={{ marginRight: 15 }}>
          <img src="/gold.png" style={{ height: 70 }} />
        </span>
      );
    } else if (i == 2) {
      return (
        <span style={{ marginRight: 15 }}>
          <img src="/silver.png" style={{ height: 70 }} />
        </span>
      );
    } else if (i == 3) {
      return (
        <span style={{ marginRight: 15 }}>
          <img src="/bronze.png" style={{ height: 70 }} />
        </span>
      );
    } else {
      return (
        <span style={{ marginRight: 10 }}>
          <img src="/person-logo.png" style={{ height: 40 }} />
        </span>
      );
    }
  }

  render() {
    const { name, value } = this.props.data;
    const rank = this.props.rank + 1;
    return (
      <div style={{ margin: 5 }}>
        <a
          href="#"
          className="list-group-item list-group-item-action disabled"
          tabIndex="-1"
          aria-disabled="true"
          style={{ height: 100 }}
        >
          <div className="row">
            <div className="col-md-10">
              {this.getTrophies(rank)}
              {name}
            </div>
            <div className="col-md-2">
              <span
                className="badge badge-success"
                style={{ marginTop: 25, marginLeft: "80%", fontWeight: "bold" }}
              >
                {Number(value).toFixed(2)}
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
