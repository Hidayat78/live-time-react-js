import React, { useState } from "react";
import './ToDo1.css';
import Delt from "./Delt";

const ToDo1 = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const evenChane = (e) => {
        setItem(e.target.value);
    }
    const listOfItem = () => {
        setNewItem((oldVslue) => {
            return [...oldVslue, item];
        })
        setItem("");
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Hii </h1>
                    <input type="text" value={item} placeholder="Enter an Item" onChange={evenChane} />
                    <button onClick={listOfItem}>+</button>
                    <br />
                    <ol>

                        {
                            newItem.map((val, index) => {
                                return <Delt
                                    text={val}
                                    key={index}
                                />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
};
export default ToDo1;