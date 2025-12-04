import Axios from 'axios';
let User=()=>{
    let getUserHandler=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{console.log(resp.data)})
        .catch((err)=>{console.log(err.name)})
    }
    return <>
        <h3>User Component</h3>
        <button onClick={getUserHandler}>Get Data</button>
    </>
}
export default User;