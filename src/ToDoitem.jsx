import React, { useState } from "react";
import "./index.css"

function ToDoitem(props){

const [click, setclick] = useState(false);

function handleClick(){
    setclick((prevValue) => {
        return  !prevValue;
    });
}

    return   <div className="list"><div onClick={handleClick}>
    <li  style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>
    </div>
    <button onClick={() => {props.oncheck(props.id);}}>  <span>-</span>
      </button>
    </div>
}

export default ToDoitem;