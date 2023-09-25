import React from 'react';
import http from '../api/http';
import { useState, useEffect } from 'react';
const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchAllUsers();
  },[]);

  const fetchAllUsers =()=>{
    http.get('/users').then(res=>{
      setUsers(res.data);
    })
  }
  return (
    <div>
      <h2>Users List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user,index)=>(
          <tr key={user.id}>
            <td>{index}</td>
            <td>{index.name}</td>
            <td>{index.email}</td>
            <td>{index.userType}</td>
            <td>Edit</td>
          </tr>
        ))}
         
        </tbody>
      </table>
    </div>
  );
}

export default Home;
