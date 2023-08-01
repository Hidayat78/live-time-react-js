import React, { useState } from "react";
import './LiveTime.css';
const LiveTime = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(UpdateTime, 1000);


    return (
        <div>
            <h1>{currentTime}</h1>
            {/* <button onClick={UpdateTime}>Time</button> */}
        </div>
    );
}
export default LiveTime;