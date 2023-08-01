import React, { useContext } from "react";
import { BioData } from "./App2";
const ChildC = () => {
    const LastName = useContext(BioData);
    return (
        <div>
            <h1>Hii Comp C  Hidayat{LastName} is here</h1>
        </div>
    );
};
export default ChildC;