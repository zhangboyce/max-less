'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1534318347853_5766';
  config.host = 'http://127.0.0.1:7001';

  config.middleware = [ 'auth', 'admin' ];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 白名单
    domainWhiteList: [ 'http://127.0.0.1:7001' ],
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/max_less',
    options: { useNewUrlParser: true },
  };

  config.static = {
    prefix: '/static/',
    dir: path.join(appInfo.baseDir, 'app/web/public'),
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };

  // config.notfound = {
  //     pageUrl: '/static/views/index.html',
  // };

  config.passportLocal = {
    usernameField: 'username',
    passwordField: 'password',
  };

    config.view = {
        defaultViewEngine: 'nunjucks',
        root: path.join(appInfo.baseDir, 'app/web/public/views'),
        mapping: {
            '.html': 'nunjucks',
            '.nj': 'nunjucks',
        }
    };

  return config;
};
