import React, { useState } from "react";

const Time = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    // setInterval(updateTime, 1000);
    return (
        <div>
            <h1>Time:</h1>
        </div>
    )
}
export default Time;