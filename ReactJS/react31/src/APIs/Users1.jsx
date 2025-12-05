import {useState} from 'react';
import Axios from 'axios';
let Users1=()=>{
    let [users,setUsers]=useState([]);
    let getData=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data);
            setUsers(resp.data)
        })
        .catch((err)=>{console.log(err.name)})
    }
    return <>
        <button onClick={getData}>GET</button>
        <pre>{JSON.stringify(users)}</pre>
        <table border="1">
            <thead>
                <tr>
                    <th>uId</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map((user)=>{
                            return <tr key ={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                   </tr>
                        })
                }
            </tbody>
        </table>
        </>
}
export default Users1;