// Code Keypad Component Here
import React from "react";

function Keypad(){
    function logPassword(){
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={logPassword}></input>
    )
}

export default Keypad;