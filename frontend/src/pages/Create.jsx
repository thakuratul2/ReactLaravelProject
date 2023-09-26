import React from 'react';
import { useState } from 'react';
import http from '../api/http';
import {useNavigate} from 'react-router-dom';

const Create = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    
    setInput(values=>({...values,[name]:value}));
  }

  const submitForm = () =>{
    http.post('users',input).then((res)=>{
      navigate('/');
    })
  }
  return (
   <>
    <h2>New User</h2>
    <div className="row">
      <div className="col-sm-6 justify-content-center">
      <label>Name</label>
<input type="text" name='name' className='form-control mb-2'
  value={input.name || ''}
  onChange={handleChange}
/>
<label>Email</label>
<input type="text" name='email' className='form-control mb-2'
  value={input.email || ''}
  onChange={handleChange}
/>

<button type='button' onClick={submitForm} className='btn btn-info mt-2'>Create</button>
      </div>
    </div>
   </>
  );
}

export default Create;
