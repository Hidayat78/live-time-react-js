import React, { Component } from "react";

export default class Child extends Component {
    postData() {
        // this.props.getData("Hidayat")
        var emp = {
            id: 101,
            name: "Hidayat",
            salary: 90000,
            City: "Delhi"
        }
        this.props.getData(emp)
    }
    render() {
        return (
            <div>
                <h1>Child components</h1>
                <button className="btn btn-primary" onClick={() => this.postData()} >Send dtat</button>
            </div>
        )
    }
}