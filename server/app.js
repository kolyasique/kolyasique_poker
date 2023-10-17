/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

// require('dotenv').config();

const express = require('express');
// const https = require('https');
const http = require('http');

const path = require('path');
const fs = require('fs');

// const BaseRouter = require('./src/routes/api');npm start

// const configApp = require('./config/configApp');

const app = express();
// configApp(app);
const HOST = process.env.HOST ?? '127.0.0.1';
const PORT = process.env.PORT ?? 1488;

// app.use('/api', BaseRouter);

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
