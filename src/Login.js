import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  };
  const [password, setPassword] = useState('');

  return (
    <div className="login-form">
      <h2>Оралуыңызбен</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Почта:</label>
          <input
            type="email"
            id="email"
            name="emil"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Құпия сөз:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
