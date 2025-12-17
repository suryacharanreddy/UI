import {useState} from 'react'
let Login=()=>{
    let [userName,setUserName]=useState("")
    let [password,setPassword]=useState("")
    let userNameHandler=(event)=>{
        setUserName(event.target.value);
    }
    let passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        alert("form Submitted")
        console.log(userName,password);
    }
    return <div>
        <pre>{userName} {password}</pre>
        <form onSubmit={submitHandler}>
            <label>UserName :</label>
            <input type="text" onChange={userNameHandler} name="username"/><br/><br/>
            <label>password :</label>
            <input type ="password" onChange={passwordHandler}name="password"/><br/><br/>
            <button type="submit">Login</button>
        </form>
    </div>
}
export default Login;