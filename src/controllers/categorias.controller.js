const categoriasCtrl = {};
const Producto = require('../models/Producto');



categoriasCtrl.renderEmprendimiento = async (req,res) =>{
   const libros = await Producto.find({"categoria": "emprendimiento"}).sort({createdAt:'desc'}); //Hacemos una peticion a la bd, lo filtramos segun si el usuario le pertenece y lo ordenamos por fecha de manera desendente
   res.render('categorias/emprendimiento' ,{libros});
};

categoriasCtrl.renderAdministracion = async (req,res) =>{
   const libros = await Producto.find({"categoria": "administracion"}).sort({createdAt:'desc'}); //Hacemos una peticion a la bd, lo filtramos segun si el usuario le pertenece y lo ordenamos por fecha de manera desendente
   res.render('categorias/administracion', {libros});

   
};

categoriasCtrl.renderSuperacionPersonal = async (req,res) =>{
   const libros = await Producto.find({"categoria": "superacionPersonal"}).sort({createdAt:'desc'}); //Hacemos una peticion a la bd, lo filtramos segun si el usuario le pertenece y lo ordenamos por fecha de manera desendente

   res.render('categorias/superacionPersonal', {libros});
};

module.exports = categoriasCtrl;