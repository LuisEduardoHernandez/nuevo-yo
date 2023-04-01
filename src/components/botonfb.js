import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleResponse = (response) => {
    setName(response.name);
    setEmail(response.email);
  };

  return (
    <div>
      <FacebookLogin
        appId="1497912747302346"
        autoLoad={true}
        fields="name,email"
        callback={handleResponse}
      />
      <form>
        <label>Nombre:</label>
        <input type="text" value={name}  readOnly />
        <label>Correo electrónico:</label>
        <input type="email" value={email} readOnly />
      </form>
    </div>
  );
};

export default Login;