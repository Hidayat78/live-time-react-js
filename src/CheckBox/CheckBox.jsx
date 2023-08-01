import React, { useState } from "react";

const CheckBox = () => {
    // const [check, setCheck] = useState('')
    const [items, setItems] = useState([]);
    const getbtnChange = (e) => {
        const { value, checked } = e.target
        console.log(`${value}`)

    }
    return (
        <div>
            <ul>
                <li><input type="checkbox" value={"Vishal"} onChange={(e) => getbtnChange(e)} />Vishal</li>
                <li><input type="checkbox" value={"Hidayat"} onChange={(e) => getbtnChange(e)} />Hidayat</li>
                <li><input type="checkbox" value={"Punit"} onChange={(e) => getbtnChange(e)} />Punit</li>
                <li><input type="checkbox" value={"Arun"} onChange={(e) => getbtnChange(e)} />Arun</li>
                <li><input type="checkbox" value={"Mango"} onChange={(e) => getbtnChange(e)} />Mango</li>
                <li><input type="checkbox" value={"Banana"} onChange={(e) => getbtnChange(e)} />Banana</li>
                <li><input type="checkbox" value={"Fruit"} onChange={(e) => getbtnChange(e)} />Fruit</li>
            </ul>
            {
                <h1>{items}</h1>
            }
            <button onChange={getbtnChange}>Print</button>
        </div>
    );
};
export default CheckBox;