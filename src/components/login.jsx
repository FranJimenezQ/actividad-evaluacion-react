import { useState } from 'react';
import './login.css'

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
        onSubmit(username, password);
      };
  

    return (
    <div className="container">
    <div className = "container-login">
        <h1 className = "loginPage-title">Log in to All your pics</h1>
        <form className='login-form' onSubmit={(handleSubmit)}>
            <div className="form-group mb-3">
                <input className='form-control form-input' 
                type = 'text'
                value={username}
                onChange={handleUsernameChange} 
                name= 'username' 
                placeholder="User name"></input>
            </div>
            <div className="form-group mb-3">
                <input className='form-control form-input' 
                type= 'password'
                value={password}
                onChange={handlePasswordChange} 
                name= 'password' 
                placeholder="Password"/>
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