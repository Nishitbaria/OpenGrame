// src/components/VerifyEmail.tsx
import React, { useState } from 'react';
import { account } from '../../lib/appwrite/appwrite';
import './VerifyEmail.css';

const VerifyEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateEmail = async () => {
    setError(null);
    setSuccess(null);
    try {
      await account.updateEmail(email, password);
      await account.createVerification('https://your-app.com/verify-email'); // Replace with your actual verification URL
      setSuccess('Verification email sent.');
    } catch (error) {
      setError('Error updating email. Please try again.');
      console.error('Error updating email:', error);
    }
  };

  return (
    <div className="verify-email-container">
      <form className="verify-email-form" onSubmit={(e) => { e.preventDefault(); updateEmail(); }}>
        <h2>Verify Your Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Verify Email</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default VerifyEmail;
