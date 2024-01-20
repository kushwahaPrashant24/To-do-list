import React, { useState } from "react";
import ToDoitem from "./ToDoitem";
import "./index.css"

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
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
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
