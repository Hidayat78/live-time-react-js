import React, { Component } from "react";

class StateExp extends Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
    }
    increment() {
        this.setState({ num: this.state.num + 1 })

    }
    decrement() {
        this.setState({ num: this.state.num - 1 })

    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button className="btn btn-primary" onClick={() => this.increment()}>Increment</button>
                <button className="btn btn-danger" onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default StateExp;