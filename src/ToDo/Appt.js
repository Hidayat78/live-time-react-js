import React, { useState } from "react";
import './Appt.css';
import ToDo from "./ToDo";
const Appt = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("")
    }
    const DeleItems = (id) => {
        console.log("deletd")
        setItems((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            })
        })
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={inputList} placeholder="Add task" onChange={itemEvent}
                    />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {
                            Items.map((itemval, index) => {
                                return <ToDo
                                    key={index}
                                    text={itemval} id={index}
                                    onSelect={DeleItems} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )

}
export default Appt;