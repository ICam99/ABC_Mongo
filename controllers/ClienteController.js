var mongoose = require('mongoose');
var Cliente = require("../models/Cliente");

var clienteController = {};

clienteController.list = function(req, res){
    
    Cliente.find({}).exec(function(err, clientes){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/cliente/index', {clientes: clientes} );
        
    });
    
};

clienteController.show = function(req, res){
    Cliente.findOne({_id: req.params.id}).exec(function(err, cliente){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/cliente/show', {cliente: cliente} );
    });
    
};

clienteController.create = function(req, res){
    res.render('../views/cliente/create');
};

clienteController.save = function(req, res){
    var cliente = new Cliente( req.body );
    
    cliente.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a cliente. :)");
        res.redirect("/clientes/show/"+cliente._id);
        
    });
};

clienteController.edit = function(req, res) {
  Cliente.findOne({_id: req.params.id}).exec(function (err, cliente) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/cliente/edit", {cliente: cliente});
    
  });
};

clienteController.update = function(req, res){
    Cliente.findByIdAndUpdate( req.params.id, {$set: {
        id: req.body.id,
        name: req.body.name
    }}, { new: true },
    function( err, cliente){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/cliente/edit', {cliente: req.body} );
        }
        
        console.log( cliente );
        
        res.redirect('/clientes/show/' + cliente._id);
        
    });
};

clienteController.delete = function(req, res){
    
    Cliente.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("cliente deleted!");
        res.redirect("/clientes");
    });
    
};

module.exports = clienteController;