
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[users,setUsers]=useState([]);
  const[newname,setNewname]=useState("");
  const[newemail,setNewemail]=useState("");
  useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((response)=> response.json())
     .then((json)=>setUsers(json))
  },[])
const adduser=()=>{
  const name=newname.trim();
  const email=newemail.trim();

  if(name && email){
    fetch("https://jsonplaceholder.typicode.com/users",

  {
    method:"POST",
    body:JSON.stringify({
      name,
      email
    }),
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
    }
  }
    ).then((response)=> response.json())
    .then(data=>{
      setUsers([...users,data]);
      alert("inserted successfully")
      setNewname("")
      setNewemail("")
    })
    
  }
}
  return (
    <>
    <h1>REACT CRUD APP</h1>
    <div>
     <table>
      <tr>
         <th>id</th>
         <th>name</th>
         <th>email</th>
         <th>Action</th>
      </tr>
      {
        users.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='button'>Update</button>
                <button className='delete'>Delete</button>
              </td>
              </tr>
        )
      }
<tfoot>
  <tr>
  <td></td>
    <td><input type='text' value={newname} onChange={(e)=> setNewname(e.target.value)} placeholder='enter name'/></td>
    <td><input type='text' value={newemail} onChange={(e)=> setNewemail(e.target.value)} placeholder='enter email'/></td>
    <td><button className='adduser' onClick={adduser}>Add user</button></td>
  </tr>
</tfoot>
     </table>
    </div>
    </>
  );
}

export default App;
