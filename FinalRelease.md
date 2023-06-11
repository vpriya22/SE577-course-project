## Project Overview

This web application is designed as a front-end to GitHub . It consists of two main components: a Single-Page Application (SPA) and the backend server. The SPA allows users to view and interact with their GitHub repositories, while the backend server handles data retrieval from GitHub's APIs and also serves static repositories from a database.

## Architecture Description

The architecture of our GitHub web application follows a client-server model, utilizing modern web technologies and APIs. 

### 1. Front-End SPA

This is developed using Vue.js and TypeScript, which enables the creation of a user-friendly and dynamic interface. It offers various pages that allow users to view static DB repositories and all the GitHub repositories associated with the authenticated user, access additional details of repositories, and also explore commit details and gists.

### 2. Backend Server

The backend server is responsible for handling data retrieval from GitHub's APIs and serving static DB repositories. It is built using Node.js and Express.js.

- **Proxy Routes**: The server uses proxy routes (`/ghsecure`) to securely communicate with GitHub's APIs. The secure proxy route (`/ghsecure`) requires an access token (`GH_ACCESS_TOKEN`) provided through environment variables.
- **GitHub API Integration**: The server utilizes the GitHub API to fetch repository data, commits and gists. It handles requests from the front-end SPA and forwards them to the GitHub API via the secure proxy route.
- **Static DB Repositories**: The server reads and parses the `repositories.yaml` file, which contains information about static DB repositories. It serves this data through the `/repos` endpoint to be consumed by the front-end SPA.

The application uses API interfaces to represent various entities and ensure consistent data structures for repositories, commits and gists.

## Quality Attributes

- **Scalability**: The application leverages scalable technologies, like Node.js and Express.js, and follows best practices for performance optimization.
- **Maintainability**: The codebase adheres to modular design principles, making it easy to maintain and enhance. The use of client-server model, Vue.js and Express.js promotes separation of concerns and clean and organized code.
- **Reliability**: Proper API integrations ensure reliable data retrieval from GitHub APIs, reducing the chances of data inconsistencies or service disruptions.
- **Security**: The server communicates with GitHub APIs using a secure web proxy, protecting user data.
- **Usability**: The user interface is designed to be intuitive and user-friendly, providing a seamless experience.

## Build and Run Instructions

**Note:** Make sure to start the backend microservice before proceeding to the frontend application.

### Backend Microservice

1. Navigate to the server directory
```
cd server
```
2. Install the required dependencies
```
yarn install
```
3. Start the backend microservice
```
yarn dev
```  
The microservice will be hosted at `http://localhost:3000`

### Frontend Application

1.  Navigate to the client directory
```
cd client
```
2.  Create a .env file and add the GitHub Access Token

```
touch .env

echo "GH_ACCESS_TOKEN=xxxx" >> .env
```
3.  Install the required dependencies
```
yarn install
```
4.  Start the client
```
yarn dev
```
The client application will be accessible at  `http://localhost:5173`


