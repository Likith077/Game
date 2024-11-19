# Game Space

This project is a web-based game platform that allows users to securely access and play a variety of mini-games.

## Overview

The main objective of the Game Space project is to provide a user-friendly and secure platform for users to discover and play online games. The application features user authentication, game access control, and a search functionality to help users find their desired games easily.

## Key Features

1. **User Authentication**: Users can register, log in, and log out of the application securely using the NextAuth.js library.
2. **Game Access Control**: Only authenticated users can access and play the available games.
3. **Search Functionality**: Users can search for games using the search bar, making it easier to find their preferred games.
4. **Responsive User Interface**: The application is built using React and Tailwind CSS, ensuring a responsive and visually appealing user experience.
5. **Game Catalog**: The platform offers a collection of mini-games, including classic games like Snake, Tetris, and Tic-Tac-Toe, as well as more modern games.

## Main Modules and Imports

The project utilizes the following main modules and libraries:

1. **Front-end**:
   - **Next.js**: A React framework for building server-rendered React applications.
   - **React**: A JavaScript library for building user interfaces.
   - **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

2. **Authentication**:
   - **NextAuth.js**: A complete open-source authentication solution for Next.js applications.

3. **Database**:
   - **Prisma**: An ORM (Object-Relational Mapping) tool that simplifies database operations.
   - **SQLite**: A lightweight, serverless, and self-contained SQL database engine.

4. **Server-side**:
   - **Next.js API Routes**: Serverless functions that handle API requests and responses.

5. **Testing**:
   - **Jest**: A JavaScript testing framework for unit testing.
   - **React Testing Library**: A library for testing React components.

The main imports used in the project include:

```javascript
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import prisma from '../lib/prismadb';
import bcrypt from 'bcrypt';
import { render, fireEvent, waitFor } from '@testing-library/react';
```

These imports cover the core functionality of the application, including user management, database interactions, and testing utilities.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/game-space.git
   cd game-space
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   ```bash
   npx prisma init
   npx prisma migrate dev
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the application in your web browser:**

   The application should now be accessible at `http://localhost:3000`.

## Usage

1. **Register or Log In**:
   - Visit the application and click on the "Login" button in the header.
   - If you're a new user, click on the "Register" link and complete the registration form.
   - After logging in, you'll be redirected to the home page.

2. **Search for Games**:
   - Use the search bar in the header to search for your desired games.
   - The search results will display the available games that match your query.

3. **Access and Play Games**:
   - Click on the game you want to play, and you'll be redirected to the game page.
   - Enjoy playing the game!

## Future Enhancements

- **Additional Game Integration**: Expand the game catalog by integrating more mini-games and interactive experiences.
- **User Profiles**: Implement user profiles to allow users to track their game progress, achievements, and personalize their experience.
- **Multiplayer and Social Features**: Introduce multiplayer functionality and social features like leaderboards or game invitations.
- **Mobile Optimization**: Optimize the application for mobile devices to provide a seamless experience on the go.

## Contributing

Contributions to the Game Space project are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## Result-Screenshots

![Screenshot 2024-07-30 204838](https://github.com/user-attachments/assets/abfc5df0-04c5-4043-b624-b85a47d9168e)
![Screenshot 2024-07-30 204924](https://github.com/user-attachments/assets/f41a984b-1883-48af-a0b7-3dee5549cac8)
![Screenshot 2024-07-30 204953](https://github.com/user-attachments/assets/c35f5e5e-6e0d-4b1e-940b-610351bb9d1e)
![Screenshot 2024-07-30 205019](https://github.com/user-attachments/assets/d28b77ef-7709-462d-b780-afb37b1875d7)
![Screenshot 2024-07-30 205100](https://github.com/user-attachments/assets/6fb44ae5-8a50-4cd3-82da-fdc2a3217706)
![Screenshot 2024-07-31 133325](https://github.com/user-attachments/assets/1db5128e-35c5-49e9-9d26-8e0af6ddafec)




## License

This project is licensed under the [MIT License](LICENSE).
