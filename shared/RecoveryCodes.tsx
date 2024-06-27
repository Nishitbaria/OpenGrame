// src/components/RecoveryCodes.tsx
import React, { useState } from 'react';
import { account } from '../../lib/appwrite/appwrite';
import './RecoverCodes.css'; // Import CSS file for styling

const RecoveryCodes: React.FC = () => {
  const [codes, setCodes] = useState<string[]>([]);

  const generateRecoveryCodes = async () => {
    try {
      const response = await account.createMfaRecoveryCodes();
      setCodes(response.recoveryCodes);
      console.log(response.recoveryCodes);

      // Save the recovery codes to the database or another secure storage
      await saveRecoveryCodesToDatabase(response.recoveryCodes);
    } catch (error) {
      console.error('Error generating recovery codes:', error);
    }
  };

  return (
    <div>
      <button className="generate-button" onClick={generateRecoveryCodes}>Generate Recovery Codes</button>
      {codes.length > 0 && (
        <div>
          <h3>Save these recovery codes:</h3>
          <ul>
            {codes.map((code, index) => (
              <li key={index}>{code}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Replace this with your API call to save the recovery codes
const saveRecoveryCodesToDatabase = async (codes: string[]) => {
  // API call to save the codes
  console.log('Saving recovery codes to database:', codes);
};

export default RecoveryCodes;
