import React from "react";
import { FirstName, LastName } from "./App1";

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>

                {
                    (fname, lname) => {
                        return (
                            <LastName.Consumer>
                                {
                                    (lname) => {
                                        return < h1 > {fname} Hidyat {lname}</h1>
                                    }
                                }
                            </LastName.Consumer>
                        )
                    }
                }
            </FirstName.Consumer>
        </>
    );
};
export default CompC;