# OpenGrame

<hr>




![image](https://github.com/Nishitbaria/OpenGrame/assets/85815172/ad4197bf-0f75-4c1b-b24c-a124f755d6f7)




## OpenGrame is a modern social media app that allows users to connect, share, and explore content in a seamless and engaging way.

## Featured In

<table>

   <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
   </tr>
   <tr>
      <td><img src=".github/assets/gssoc24.png" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
      <td>GirlScript Summer of Code 2024</td>
      <td>GirlScript Summer of Code is a three-month-long Open Source Program conducted every summer by GirlScript Foundation. It is an initiative to bring more beginners to Open-Source Software Development. <a href="docs/gssoc.md">Click here</a> to get the guidelines.  </td>
   </tr>

</table>

## Table of Contents
* [Technologies Used](https://github.com/Nishitbaria/OpenGrame?tab=readme-ov-file#technologies-used)
* [Features](https://github.com/Nishitbaria/OpenGrame?tab=readme-ov-file#features)
* [Getting Started](https://github.com/Nishitbaria/OpenGrame?tab=readme-ov-file#getting-started)
    * [Pre-requisites](https://github.com/Nishitbaria/OpenGrame?tab=readme-ov-file#prerequisites)
    * [Installation](https://github.com/Nishitbaria/OpenGrame?tab=readme-ov-file#installation)


## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - Shadcn (for additional styling assets)

- **Backend:**
  - Appwrite (Backend as a Service)

- **Data Fetching and Infinite Scroll:**
  - React Query

## Features

- **User Authentication:** Secure user authentication system powered by Appwrite, ensuring the safety of user data.

- **Responsive Design:** A responsive and mobile-friendly UI to provide a consistent experience across devices.

- **Stylish UI with Tailwind CSS:** Utilizing the power of Tailwind CSS to create a visually appealing and customizable user interface.

- **Efficient Data Fetching:** React Query is employed for efficient data fetching, ensuring optimal performance and responsiveness.

- **Infinite Scroll:** Seamless and smooth infinite scroll functionality for an uninterrupted browsing experience.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nishitbaria/OpenGrame/
   ```

2. Navigate to the project directory:

   ```bash
   cd OpenGrame
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app should now be running at [http://localhost:5173](http://localhost:5173).

5. Example .env You can be used in your localhost

```
VITE_APPWRITE_PROJECT_ID="663e1d6f0023b552e5d1"
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_STORAGE_ID="65478ceca6d8a49b3cf1"
VITE_APPWRITE_DATABASE_ID="3j22cy28uc3"
VITE_APPWRITE_SAVES_COLLECTION_ID="65479a44782ab930d6f3"
VITE_APPWRITE_USERS_COLLECTION_ID="65479b3f3ff36d0c3fa6"
VITE_APPWRITE_POSTS_COLLECTION_ID="65479a1224b7d12ccb6e"

```


