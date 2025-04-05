// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

server.use(middlewares);

// Ajout des routes personnalisées
server.use(jsonServer.rewriter(routes));

// Utilisation du routeur JSON Server
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
