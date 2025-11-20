var users;

async function display_users(){
    users= await fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{return resp.json()})
    .then((data)=>{return data})
    .catch(()=>{})
    console.log(users)
    let rows=""
    for(user of users){
        rows=rows+`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                    </tr>
                 `
    }
    document.getElementById('tb_data').innerHTML=rows
}
display_users();