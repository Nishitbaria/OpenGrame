// src/components/EnableMFA.tsx
import React, { useState } from 'react';
import { account } from '../../lib/appwrite/appwrite';
import './Enable2FA.css';

const EnableMFA: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const enableMFA = async () => {
    try {
      const result = await account.updateMFA(true);
      setIsEnabled(true);
      console.log('MFA enabled:', result);
    } catch (error) {
      console.error('Error enabling MFA:', error);
    }
  };

  return (
    <div className="enable-mfa-container">
      <h1>Enable Multi-Factor Authentication</h1>
      {!isEnabled ? (
        <button className="enable-mfa-button" onClick={enableMFA}>Enable MFA</button>
      ) : (
        <p className="mfa-enabled-message">MFA is enabled!</p>
      )}
    </div>
  );
};

export default EnableMFA;
