import React, { useState } from "react";

function ToDoitem(props){

const [click, setclick] = useState(false);

function handleClick(){
    setclick((prevValue) => {
        return  !prevValue;
    });
}

    return <div onClick={handleClick}>
    <li  style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>
    </div>
}

export default ToDoitem;