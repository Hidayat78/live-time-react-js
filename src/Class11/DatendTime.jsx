import React from "react";

const fname = "Hidayat"
const currentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
const DatendTime = () => {
    return (
        <div>
            <h1>My name is {fname}</h1>
            <p>Current Date: {currentDate} </p>
            <p>Current Date: {CurrentTime} </p>
        </div>
    );
};
export default DatendTime;