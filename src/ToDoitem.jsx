import React, { useState } from "react";
import "./index.css";
import { motion } from "framer-motion";

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
    <motion.button
     whileHover={{
               scale: 1.2,
               transition: { duration: 0.3 },
               }}            
     onClick={() => {props.oncheck(props.id);}}> 
      <span>-</span>
      </motion.button>
    </div>
}

export default ToDoitem;