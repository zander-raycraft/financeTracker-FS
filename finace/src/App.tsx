import React, { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [usernameValue, setUsernameValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordconfValue, setPasswordConfValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (propertyName: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    switch (propertyName) {
      case 'username':
        setUsernameValue(event.target.value);
        break;
      case 'name':
        setNameValue(event.target.value);
        break;
      case 'password':
        setPasswordValue(event.target.value);
        break;
      case 'passwordconf':
        setPasswordConfValue(event.target.value);
        break;
      default:
        break;
    }
  };

  const isPasswordEmpty = passwordValue.trim() === '';

  return (
    <div className="App">
      <div className='coin-container'>
        <img src={process.env.PUBLIC_URL + '/coinPot2.png'} alt='coin-pot' />
      </div>
      <div className="login-container">
        <div className='sign-up-container'>
          <h1>Create account</h1>
          <h2>Sign up to start tracking finances</h2>
        </div>
        <div className='user-info-container'>

          {/* Username information */}
          <input
            type="text"
            value={usernameValue}
            onChange={handleInputChange('username')}
            placeholder="Enter your username"
          />

          {/* Name information */}
          <input
            type="text"
            value={nameValue}
            onChange={handleInputChange('name')}
            placeholder="Enter your name"
          />

          {/* Password information */}
          <div className="input-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={passwordValue}
              onChange={handleInputChange('password')}
              placeholder="Enter your password"
            />
            {isPasswordEmpty ? null : (
              <button
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            )}
          </div>

          {/* Password verification information */}
          <input
            type="password"
            value={passwordconfValue}
            onChange={handleInputChange('passwordconf')}
            placeholder="Confirm password"
          />
        </div>
        <div className='login-page-container'></div>
      </div>
    </div>
  );
}

export default App;
