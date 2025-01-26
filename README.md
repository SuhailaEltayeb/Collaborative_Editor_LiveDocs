**Introduction**
Developed using Next.js for the user interface, Liveblocks is a text editor powered by real-time collaboration features. 

**Technologies used**
- Next.js: A React framework for building server-rendered applications.
- Clerk: A comprehensive user management platform.
- TypeScript: Adds static typing to JavaScript for improved developer experience.
- Liveblocks: Enables real-time collaboration and presence features.
- Lexical Editor: A text editor developed by Meta, and provided full CRUD functionality.
- ShadCN: Offers pre-designed UI components and utilities to be customized and styled as needed.
- Tailwind CSS: A utility-first CSS framework for styling.
- Sentry: Software platform for monitoring application.

**Key Features**

- Collaborative Text Editor: Real-time collaborative editing with multiple users editing the same document  simultaneously.

- Document Management:

    Create Documents: Users can create new documents, automatically saved and listed.

    Delete Documents: Users can delete documents they own.

    Share Documents: Documents can be shared via email or link with customizable permissions.

    List Documents: Displays all documents owned or shared with the user, featuring search and sort options.

- Comments: Supports inline and general comments with threading for discussions and collaborators @mention.

- Active Collaborators: Displays real-time presence indicators for active collaborators.

- Notifications: Alerts users about document shares, new comments, and collaborator activities.

- Responsive Design: Ensures the application is fully responsive across all devices.

**Setup Guidelines**
To set up the project on your local machine, follow these steps:

1- Prerequisites
    Ensure the following are installed:

* Git

* Node.js

* npm (Node Package Manager)

2- Cloning this Github Repository

- git clone https://github.com/SuhailaEltayeb/Collaborative_Editor_LiveDocs.git
- cd collaborative-editor_LiveDocs

3- Installation
    Install the necessary dependencies using npm:

- npm install

- Setting Up Environment Variables
- Create a .env file in the project root and include the following:

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
==>  Enter the actual credentials from Clerk and Liveblocks.

4- Running the Project
Start the development server with:

- npm run dev
