// src/components/CompleteMFAChallenge.tsx
import React, { useState } from 'react';
import { account } from '../../lib/appwrite/appwrite';

const CompleteMFAChallenge: React.FC = () => {
  const [challengeId, setChallengeId] = useState('');
  const [otp, setOtp] = useState('');

  const completeMFAChallenge = async () => {
    try {
      const response = await account.updateMfaChallenge(challengeId, otp);
      console.log('MFA challenge completed:', response);
    } catch (error) {
      console.error('Error completing MFA challenge:', error);
    }
  };

  return (
    <div>
      <h1>Complete MFA Challenge</h1>
      <input
        type="text"
        value={challengeId}
        onChange={(e) => setChallengeId(e.target.value)}
        placeholder="Enter Challenge ID"
      />
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={completeMFAChallenge}>Complete Challenge</button>
    </div>
  );
};

export default CompleteMFAChallenge;
