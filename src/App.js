import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Plan from "./components/Plan";

class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDeleteItem = (id) => {
    console.log("handleDeleteItem", id);
    const oldItems = [...this.state.items];
    console.log("oldItems", oldItems);
    const items = oldItems.filter((e, i) => {
      return i !== id;
    });
    console.log("newItems", items);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Todays plan</h2>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your plan"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary px-5 fw-bold"
                  onClick={this.handleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.length === 0 && (
                    <React.Fragment>
                      <li className="shadow p-2 my-2 col-sm-9 text-warning text-center">
                        No todo found...
                      </li>
                    </React.Fragment>
                  )}
                  {this.state.items.map((v, i) => {
                    return (
                      <Plan
                        key={i}
                        value={v}
                        id={i}
                        sendData={this.handleDeleteItem}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
