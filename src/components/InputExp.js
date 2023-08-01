import React, { Component } from "react";
import '../assets/css/style.css';
class InputExp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            city: ""


        }
    }
    getData(e) {
        // console.log(e.target.name, e.target.value)
        if (e.target.name == "name")
            this.setState({ name: e.target.value })
        else if (e.target.name = "email")
            this.setState({ email: e.target.value })
        else if (e.target.name = "phone")
            this.setState({ phone: e.target.value })
        else if (e.target.name = "password")
            this.setState({ password: e.target.value })
        else
            this.setState({ city: e.target.value })
    }
    postData(e) {
        e.preventDefault()
        alert(
            `Name: ${this.state.name}
            Email: ${this.state.email}
            Phone: ${this.state.phone}
            City : ${this.state.password}
            PAssword :  ${this.state.city}
            `
        )
    }
    render() {

        return (
            <div className="main">
                <div className="center">
                    <h1>Class Component</h1>
                    <input type="text" name="name" placeholder="Put ur Name" onChange={(e) => this.getData(e)} />
                    <input type="text" name="email" placeholder="Put ur email" onChange={(e) => this.getData(e)} />
                    <input type="text" name="phone" placeholder="Put ur phone no" onChange={(e) => this.getData(e)} />
                    <input type="text" name="password" placeholder="Put ur Password" onChange={(e) => this.getData(e)} />
                    <input type="text" name="city" placeholder="Put ur City Name " onChange={(e) => this.getData(e)} />

                    <button className="btn btn-primary" onClick={(e) => this.postData(e)}>Submit</button>
                </div>
            </div>
        )
    }
}
export default InputExp;