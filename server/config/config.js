/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
// const session = require('express-session');
const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session');

// const sessionConfig = require('./sessionConfig');
// const userSession = require('../src/middlewares/userSessionMiddleware');
// const corsMiddleware = require('../src/middlewares/corsMiddleware');
// const cookieSessionMiddleware = require('../src/middlewares/cookieSessionMiddleware');

function configApp(app) {
  // cookie: {
  //   name: 'session',
  //   secret: 'norm',
  //   domain: 'chicagomegashop.com',
  //   sameSite: 'none',
  //   secure: true,
  //   httpOnly: true,
  // },

  app.set('trust proxy', 1);

  //   app.use(cookieSessionMiddleware);

  app.use(cookieParser());
  // app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
//   app.use(userSession);
//   app.use(corsMiddleware);
}
module.exports = configApp;
