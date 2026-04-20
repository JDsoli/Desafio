import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=')
    queryParams[key] = value
    return queryParams
  }, {})
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = url.match(route.path);
    const { query, ...params } = routeParams.groups;

    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    return route.handler(req, res);
  }
  return res.writeHead(404).end();
});

server.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333 🚀');
});