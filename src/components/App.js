import React, { useState } from "react";
import "./../styles/App.css";


function App() {
  const [add,setAdd] = useState('');
  const [todo,setTodo] = useState([]);

  function handle(e) {
    e.preventDefault();
    setTodo([...todo,add])
    console.log(add);
     setAdd('');
  }

  function handleBox(index) {
    setTodo(
     todo.filter((iteam,number)=>{
      return number !== index;
     })
    )
  }

  return (
    <div>
      <h2>To-Do-list</h2>
      <input 
      type="text" 
      placeholder='name'
      value={add}
      onChange={(e)=>setAdd(e.target.value)}
      />
      <button onClick={handle}>Add Todo</button>
      {todo.map((iteam,index)=>(
        <p key={index}>{iteam} <button onClick={()=>handleBox(index)}>Delete</button></p>
      ))}
    </div>
  )
}


export default App;
