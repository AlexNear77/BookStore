const indexCtrl = {};

indexCtrl.renderIndex = (req,res) =>{
   console.log(res.locals.user);
   res.render('index');
};

indexCtrl.renderAbout = (req,res) =>{
   res.render('about');
};

indexCtrl.renderTipoUser = (req,res) =>{
   res.render('tipoUser');
};

indexCtrl.renderTipoUserSignin = (req,res) =>{
   res.render('tipoUserSignin');
};


module.exports = indexCtrl;