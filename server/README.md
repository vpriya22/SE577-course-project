## Instructions

1. Install the required dependencies
```
yarn install
```
2. Create a .env file and add the GitHub Access Token 
```
touch .env

echo "GH_ACCESS_TOKEN=xxxx" >> .env
```

3. Start the server
```
yarn dev
```  
The server will be hosted at `http://localhost:3000`
-   To view all repositories: `http://localhost:3000/repos`
-   To view a specific repository: `http://localhost:3000/repos?id=1`
-   To check GitHub API integration: `http://localhost:3000/ghsecure/users`