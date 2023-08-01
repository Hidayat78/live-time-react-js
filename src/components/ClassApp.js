import React, { Component } from "react";
class ClassApp extends Component {
    render() {
        return (
            <div>
                <h1>Hii Class App</h1>
                <h2>{this.props.heading}</h2>
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
            </div>
        );
    }
}
export default ClassApp;