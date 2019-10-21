const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:8080',
       pathRewrite: { '^/api': '/123' }
    })
  );
  // app.use(
  //   proxy('/graphql/api', {
  //     target: 'http://localhost:8081',
  //     pathRewrite: { '^/graphql': '' }
  //   })
  // );
};
