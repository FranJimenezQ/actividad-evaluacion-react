import { useState } from 'react';
import './login.css'
import { invalid } from '../services/postServices';

function LoginPage ({onSubmit}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
      if(invalid === true){  
        document.getElementsByClassName(".invalid").classList.add("invalid-block")
      }
        if (!username || !password) {
          document.getElementsByClassName(".invalid").classList.add("invalid-block")
          return;
        }
        onSubmit(username, password);
      };
      

    return (
    <div className="container">
    <div className = "container-login">
        <h1 className = "loginPage-title">Log in to All your pics</h1>
        <form className='login-form needs-validation' onSubmit={(handleSubmit)}>
          <div className="invalid" id='invalid'>
            <p>Invalid email or password</p>
          </div>
            <div className="form-group mb-3">
                <input className='form-control form-input form-check-input' 
                required
                type = 'text'
                value={username}
                onChange={handleUsernameChange} 
                name= 'username' 
                placeholder="User name"></input>
                 <div class="invalid-feedback">required username</div>
            </div>
            <div className="form-group mb-3">
                <input className='form-control form-input form-check-input'
                required 
                type= 'password'
                value={password}
                onChange={handlePasswordChange} 
                name= 'password' 
                placeholder="Password"/>
                <div className="invalid-feedback">required password</div>
            </div>
            <div className="form-group mb-3">
                <button className='btn btn-primary mb-3' type='submit' variant='primary'>Login</button>
            </div>
        </form>
    </div>
    </div>
    
    );
    
    }
    export default LoginPage;