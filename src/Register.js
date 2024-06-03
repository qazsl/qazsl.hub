import './Register.css'
import React, { useState } from 'react';



function Register() {
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
  };

  return (
      <div className="register-container">
          <div className="registration-form">
              <h2>Қош келдіңіз</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="username">Аты жөніңіз:</label>
                      <input
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Почта:</label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password">Құпия сөз:</label>
                      <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <button id='reg-sub' type="submit">Тіркелу</button>
              </form>
          </div>
      </div>
  );
}

export default Register;
