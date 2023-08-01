import React, { Component } from "react";
let Name = "Hidayat";
function show() {
    return <h1>This is Hindyat Fav component</h1>
}
let a = [10, 20, 30, 40, 50, 660];
let emp = {
    id: 1000011,
    Name: "Morning Star",
    Desg: "Developer"
}
export default class Sample extends Component {

    render() {
        return (
            <div>
                <h1>Classs component</h1>
            </div>
        )
    }
}
export { Name, show, emp, a }
