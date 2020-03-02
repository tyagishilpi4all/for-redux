import React, { Component } from "react";

import "./App.css";

import AddData from "./components/dataAdd.form";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <AddData />
            </div>
        );
    }
}

export default App;
