import React ,{useState} from "react";
 
const Demo=()=>{
    const[count , setCount]=useState(0);
 
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
      setCount(count-1);
  }
 
    return(
        <div className="counter">
            <h3>Counter App using Functional Component : </h3>
          <h2>{count}</h2>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Remove</button>
        </div>
    )
} 
 
 
export default Demo;
