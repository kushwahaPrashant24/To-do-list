import React, { useState } from "react";
import ToDoitem from "./ToDoitem";
import "./index.css";
import { motion } from "framer-motion";

function App() {
  const [useText, setUseText] = useState();
  const [item, setItem] = useState([]);

  function handleText(event) {
    const inputText = event.target.value;
    setUseText(inputText);
  }

  function handleClick() {
    setItem((prevItem) => {
      return [...prevItem, useText];
    });
    setUseText("");
  }

  function deleteitem(id){
     setItem((prevItem) =>{
      return prevItem.filter((item, index)=> {
        return index !== id;
      });
     });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={useText} />
        <motion.button
        whileHover={{
               scale: 1.2,
               transition: { duration: 0.3 },
               }} 
         onClick={handleClick}>
          <span>Add</span>
        </motion.button>
      </div>
      <div>
        <ul>
          {item.map((todoItem, index) => (
            <ToDoitem 
            key={index} 
            id={index} 
            text ={todoItem} 
            oncheck={deleteitem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
