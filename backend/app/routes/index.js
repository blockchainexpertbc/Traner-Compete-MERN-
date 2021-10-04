module.exports = app => {
  const routes = require('express').Router();

  const user = require('./user');
  const userDetail = require('./userDetail');
  routes.use('/user', user);
  routes.use('/userDetail', userDetail);

  app.use('/api', routes);
}

