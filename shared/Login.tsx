// src/components/Login.tsx
import React, { useState } from 'react';
import { account } from '../../lib/appwrite/appwrite';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      console.log('Session created:', session);
    } catch (error) {
      console.error('Error logging in:', error);
      // Log the entire error object for inspection
      console.log('Full error object:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;