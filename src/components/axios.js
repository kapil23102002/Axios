import React, { Component } from "react";
import axios from "axios";
import "./axios.css";

export default class Axios extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      Error: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/people")
      .then((res) => this.setState({ myData: res.data }))
      .catch((error) => this.setState({ Error: error.message }));
  }

  render() {
    return (
      <>
        <h1>Axios Tutorial </h1>
        {this.state.Error !== "" && <h1>{this.state.Error}</h1>}
        <div className="card">
          {this.state.myData.slice(0, 12).map((post) => {
            const { id, title, body } = post;
            return (
              <div className="box" key={id}>
                <h1>Title : {title.slice(0, 10).toUpperCase()}</h1>
                <h2>
                  DESC : <br />
                  {body.slice(0, 100)}
                </h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
