import React ,{ useState } from 'react'
import './About.css'

const Aboutpage = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  });
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Your login form submission logic here
    console.log("Login form submitted with data:", loginFormData);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Your register form submission logic here
    console.log("Register form submitted with data:", registerFormData);
  };

  return (
    <div className='main-about'>
        {showRegisterForm ? (
        <form onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={registerFormData.username} 
            onChange={handleRegisterChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={registerFormData.email} 
            onChange={handleRegisterChange} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={registerFormData.password} 
            onChange={handleRegisterChange} 
          />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={loginFormData.username} 
            onChange={handleLoginChange} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={loginFormData.password} 
            onChange={handleLoginChange} 
          />
          <button type="submit">Login</button>
        </form>
      )}
      <p>
        {showRegisterForm ? (
          <>Already have an account? <button onClick={toggleForm}>Login here</button></>
        ) : (
          <>Don't have an account? <button onClick={toggleForm}>Register here</button></>
        )}
      </p>
    </div>
  )
}

export default Aboutpage
