import React, { useState } from "react";
import './IncDec.css';
const IncDec = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        setNum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1)
        } else {
            alert('Sorry -ve not allowed')
            setNum(0)
        }
        // setNum(num - 1)
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div" >
                        <button onClick={incNum} className="btn">Increment</button>
                        <button onClick={decNum} className="btn">Decrement</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default IncDec;