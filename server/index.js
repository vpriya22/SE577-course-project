const express = require('express');
const app = express();
const fs = require('fs');
const yaml = require('js-yaml');
const cors = require('cors');
const dotenv = require('dotenv');

const { createProxyMiddleware } = require('http-proxy-middleware');

const { getGHProxySecureOptions, getGHProxyOptions } = require('./proxy');

// Rest of your code...

dotenv.config();

const GHAccessToken = process.env.GH_ACCESS_TOKEN;

// Proxy route for secure requests
const proxyOptsSecure = getGHProxySecureOptions(GHAccessToken);
app.use('/ghsecure', createProxyMiddleware(proxyOptsSecure));

// Proxy route for regular requests
const proxyOpts = getGHProxyOptions();
app.use('/ghproxy', createProxyMiddleware(proxyOpts));

app.use(cors()); 

// Read and parse the YAML file
try {
  const fileContents = fs.readFileSync('repositories.yaml', 'utf8');
  const data = yaml.load(fileContents);
  const repositories = data.repositories;

  app.get('/repos', (req, res) => {
    const id = parseInt(req.query.id);
    if (id) {
      // Find the repository with the specified id
      const repository = repositories.find(repo => repo.id === id);
      
      if (repository) {
        res.json(repository);
      } else {
        res.status(404).json({ error: 'Repository not found' });
      }
    } else {
      // If no id is provided, return all repositories
      res.json(repositories);
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
} catch (err) {
  console.error('Error loading YAML file:', err);
}
