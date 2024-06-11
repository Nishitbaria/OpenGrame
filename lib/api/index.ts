// src/lib/api/index.ts

interface RecoveryCodesDatabase {
    [key: string]: string[];
  }
  
  const dummyDatabase: RecoveryCodesDatabase = {
    "user@example.com": ["code1", "code2", "code3"],
  };
  
  export const fetchRecoveryCodes = async (email: string): Promise<string[]> => {
    return dummyDatabase[email] || [];
  };
  