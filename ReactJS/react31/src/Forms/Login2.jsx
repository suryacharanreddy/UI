import {useState} from 'react'
let Login2=()=>{
    let [product,setProduct]=useState({"pname" :"  ","quantity":0,"price":0,"info":""})
    let productHandler=(event)=>{
        setProduct({...product,[event.target.name]:event.target.value});
    }
    let submitHandler=(event)=>{
        event.preventDefault();
        alert("form Submitted")
        console.log(product);
    }
    return <div>
        <form onSubmit={submitHandler}>
            <label>ProductName :</label>
            <input type="text" onChange={productHandler} name="pname"/><br/><br/>
            <label>Quantity :</label>
            <input type ="number" onChange={productHandler} name="quantity"/><br/><br/>
            <label>Price :</label>
            <input type ="number" onChange={productHandler} name="price"/><br/><br/>
            <label>Info :</label>
            <input type ="text" onChange={productHandler} name="info"/><br/><br/>
            <button type="submit">Create Product</button>
        </form>
    </div>
}
export default Login2;