const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/pokemons',
    createProxyMiddleware({
      target: 'https://pokedex-api.3rgo.tech',
      changeOrigin: true,
    })
  );
};
