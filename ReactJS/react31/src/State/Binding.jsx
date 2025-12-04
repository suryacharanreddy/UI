import {useState} from "react";
let Binding=()=>{
    let [state,setState]=useState("Hello");
    let clickHandler=(msg)=>{
        setState(msg);
    }
    return <div>
        <h3>Message :{state}</h3>
        <button onClick={clickHandler.bind(null,"Good Morning")}>Gm</button>
        <button onClick={clickHandler.bind(null,"Good Afternoon")}>Ga</button>
        <button onClick={clickHandler.bind(null,"Good Night")}>Gn</button>
    </div>
}
export default Binding;