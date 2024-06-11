// src/lib/appwrite.ts
import { Client, Account, Avatars} from 'appwrite';
import { Database } from 'lucide-react';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('663e1d6f0023b552e5d1'); // Your project ID

const account = new Account(client);
const avatars = new Avatars(client);



export { client, account, avatars,Database};
