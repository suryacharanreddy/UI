import {useState} from 'react';
import axios from 'axios'
let ContactApp=()=>{
    let [contacts,setContacts]=useState([]);
    useEffect(()=>{
        axios.get("")
        .then((resp)=>{setContacts(resp.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return <div className="container">
        <div className="">
            <h3>ContactApp compnent</h3>
            <pre>{json.stringify}</pre>
        </div>

        
    </div>
}
export default ContactApp;