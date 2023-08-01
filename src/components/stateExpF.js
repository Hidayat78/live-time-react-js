import React, { useState } from "react"
const StateExpF = () => {

    const [num, setNum] = useState(1)

    return (
        <div>
            <h1>{num}</h1>
            <button className="btn btn-primary" onClick={() => setNum(num + 1)}>Increment</button>
            <button className="btn btn-danger" onClick={() => setNum(num - 1)}>Decrement</button>
        </div>
    )
}
export default StateExpF;