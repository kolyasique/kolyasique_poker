const mainRouter = require('express').Router();

// const YandexRouter = require('./yandexTrackerAPI.router');
// const ServerPanelRouter = require('./serverPanel.router');
// const AuthRouter = require('./auth.router');
// const isAuth = require('../middlewares/isAuth');

// BaseRouter.use('/tracker', isAuth, YandexRouter);
// BaseRouter.use('/', ServerPanelRouter);
// BaseRouter.use('/auth', AuthRouter);

mainRouter.get('*', (req, res) => {
  res.json({ msg: 'no end point' });
});

module.exports = mainRouter;
