import React, { Component } from "react";
import axios from "axios";
import "./components/axios.css";

export default class Axios extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      Error: "",
    };
  }

  //   componentDidMount() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => this.setState({ myData: res.data }))
  //       .catch((error) => this.setState({ Error: error.message }));
  //   }

  getApiData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  componentDidMount() {
    getApiData();
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
                <h1>{title.slice(0, 20).toUpperCase()}</h1>
                <h2>{body.slice(0, 100)}</h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
