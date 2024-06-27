// src/components/VerifyEmailCallback.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { account } from '../../lib/appwrite/appwrite';
import './VerifyCalback.css';

const VerifyEmailCallback: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const verifyEmail = async () => {
      const params = new URLSearchParams(location.search);
      const userId = params.get('userId');
      const secret = params.get('secret');

      if (userId && secret) {
        try {
          await account.updateVerification(userId, secret);
          setStatus('Email successfully verified!');
        } catch (error) {
          setStatus('Email verification failed. Please try again.');
          console.error('Error verifying email:', error);
        }
      } else {
        setStatus('Invalid verification link.');
      }
    };

    verifyEmail();
  }, [location]);

  return (
    <div className="verification-container">
      <h2>{status}</h2>
    </div>
  );
};

export default VerifyEmailCallback;
