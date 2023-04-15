import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    fullName: '',
    userName: '',
    password: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/items', item)
      .then((res) => {
        setItem({
          fullName: '',
          userName: '',
          password: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Signup!');
      });
  };

  return (
    <div className='SignUp'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br/>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/login'>Login</Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1>Sign Up</h1>
            
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <h3>Full Name</h3>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='fName'
                  className='form-control'
                  value={item.fullName}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <h3>Username:</h3>
                <input
                  type='text'
                  placeholder='Username'
                  name='uName'
                  className='form-control'
                  value={item.userName}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <h3>Password:</h3>
                <input
                  type='text'
                  placeholder='Password'
                  name='psw'
                  className='form-control'
                  value={item.password}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
