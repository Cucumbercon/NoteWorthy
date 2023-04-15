import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    uName: '',
    psw: '',
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
            uName: '',
            psw: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Login!');
      });
  };

  return (
    <div className='Login'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/Signup'>Sign Up</Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1>Login</h1>
            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <h3>Username:</h3>
                <input
                  type='text'
                  placeholder='Username'
                  name='uName'
                  className='form-control'
                  value={item.uName}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <h3>Password:</h3>
                <input
                  type='text'
                  placeholder='Password'
                  name='psw'
                  className='form-control'
                  value={item.psw}
                  onChange={onChange}
                />
              </div>

              <input type='submit'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
