import "./Message.css";
let myStyle={color:"blue"}
let Message=()=>{

    return <div>
        <h1 style={{color:"red"}}>Good Morning - Inline</h1>
        <h2 style={myStyle}>Good Afternoon - Internal</h2>
        <h3 className="box">Good evening - External</h3>
        <button className="btn btn-primary">Button</button>
    </div>
}
export default Message;