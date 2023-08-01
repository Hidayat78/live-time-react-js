import React, { Component } from "react";
import Child from "./Child";
function getData(data) {
    alert(
        `
        Id :${data.id}
        Name: ${data.name}
        salary: ${data.salary}
        City:${data.salary}
        `
    );
}
export default class Parent extends Component {
    render() {
        return (
            <div>
                <h1>Parent components</h1>
                <Child getData={getData} />
            </div>
        )
    }
}