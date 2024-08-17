const {Router} = require('express');

const routes = new Router();

routes.get('/teste', (req, res) =>{
    return res.send({message:"Conectado com sucesso"})
});

module.exports = routes;