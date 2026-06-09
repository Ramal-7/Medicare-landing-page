import './State.css'
import { useState, useEffect } from "react";


function State(){
const[count,setvalue]=useState(0);
useEffect(()=>{
 document.title= `count :${count}` 
 document.body.style.backgroundColor= count%2===0?'yellow': 'babyPink'
},[count]
)
return(
    <div>
        <h2>Count is {count}</h2>
        <button onClick={()=>setvalue(count+1)}>Increment</button>
        <button onClick={()=>setvalue(count-1)}>Decrement</button>
    </div>

)}
export default State;