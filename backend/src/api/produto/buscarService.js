const Produto = require('./produto')

module.exports.buscar = async(req, res) => {
    var query = require('url').parse(req.url, true).query;

    Produto.find({"nome":  { $regex: new RegExp(query.nome.toLowerCase(), "i") } }).exec(function(err, produtos){
      if(err){ res.status(400).json(
             { success: false, 
               message: 'Error processing request '+ err
             }); 
           }
      res.status(201).send(produtos);
    });
  };
