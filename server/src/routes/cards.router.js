/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */

const router = require('express').Router();
// const Cookies = require('cookies');
// const cookieSession = require('cookie-session');
// const isAuth = require('../middlewares/isAuth');
/* eslint-disable consistent-return */
// const bcrypt = require('bcrypt');
// const { response } = require('express');
// const request = require('request');

router.get('/start', (req, res) => {
  if (req.session.auth?.name) {
    console.log(req.session.auth?.name, '/check');
    res.send({ msg: 'continue' });
  } else {
    res.send({ msg: 'login' });
  }
});

router.get('/', (req, res) => {
  if (req.session.auth?.name) {
    console.log(req.session.auth?.name, '/check');
    res.send({ msg: 'continue' });
  } else {
    res.send({ msg: 'login' });
  }
});
module.exports = router;
