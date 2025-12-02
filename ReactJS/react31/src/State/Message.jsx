import {useState} from "react";
let Message=()=>{
    let [msg,setMsg]=useState('hello...');
    let gmHandler=()=>{
        setMsg('Good Morning');
    }
    let gnHandler=()=>{
        setMsg('Good Night');
    }
    return <div>
        <h3>Message :{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
        <button onClick={()=>{setMsg('Hello...')}}>Reset</button>
    </div>
}
export default Message;