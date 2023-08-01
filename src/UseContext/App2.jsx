import React, { createContext } from "react";
import ChildC from "./ChildC";

const BioData = createContext();
const app2 = () => {
    return (
        <>
            <BioData.Provider value={` Morning Star`}>
                <ChildC />
            </BioData.Provider>
        </>
    );
};
export default app2;
export { BioData };