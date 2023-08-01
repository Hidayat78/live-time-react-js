import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Error = () => {
    var redirect = useNavigate()
    useEffect(() => {
        redirect("/")
    }, [])
    return (
        <div>
            <h1>Page not fond...!</h1>
        </div>
    )
}
export default Error;