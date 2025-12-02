import {useState} from "react";
let Counter=()=>{
    let [counter,setCounter]= useState(0);
    let incHandler=()=>{
        setCounter(counter+1);
    }
    let decHandler=()=>{
        if(counter>0){
        setCounter(counter-1)
    }
    }
    return <div>
        <h3>{counter}</h3>
        <button onClick={incHandler}>Increment</button>
        <button onClick={decHandler}>Decrement</button>
    </div>
}
export default Counter;