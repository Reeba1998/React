import React, {useState} from 'react';

function Todos(){

const [todo,settodo]=useState([]);
const [input,setinput]=useState("");


const addTodo= ()=>{
 input!=="" && todo.push(input);
 setinput("");
};

const del=(index)=>{
  
  console.log(index);
  todo.splice(index,1);
  console.log(todo);
}
 

return(
    <div>
    <input
      type="text" value={input} onChange={e =>setinput(e.target.value)}
    
    />
    <button onClick={addTodo} > Add Item </button>
    <ul>
      {todo.map((data,index)=>{
        return <li key={index}>{data}
        
               <button onClick={()=>del(index)}>Delete</button>
               
        </li>

      })}
      
        
     
    </ul>
  </div> 
);
};
export default Todos;