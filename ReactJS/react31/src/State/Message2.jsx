import { useState } from "react"

let Message =()=>{
    let [msg,setMsg]=useState("Hello");
    let gmHandler=()=>{
        setMsg("Good Morning");
    }
    let gaHandler=()=>{
        setMsg("Good Afternoon");
    }
    let gnHandler=()=>{
        setMsg("Good Night");
    }
    return <div>
        <h3>Message:{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gaHandler}>GA</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message;