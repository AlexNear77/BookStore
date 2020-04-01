const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/User');
const UserCliente = require('../models/UserCliente');

//Nota aqui todaviamos podemos validar si el correo realmente es un correo, etc.

passport.use(new localStrategy({ //'login', con eso cuando lo utilizemos en el controllador de users al requirir passoport podremos user passport.login pero el puto de fazt no lo hizo asi
   usernameField: 'email',
   passwordField: 'password'
}, async (email,password,done) => {
    //Comprobamos si el correo conicide con la del user registrado
    const user = await User.findOne({email});
    const userCliente = await UserCliente.findOne({email});
    if (!user && !userCliente) {
       return done(null,false,{message: 'Usuario no encontrado'});
    }else if(!userCliente && user){
       //Ahora validamos la contraseña
       const match = await user.matchContraseña(password);
       if (match) {
          return done(null,user);
       }else
         return done(null,false,{message: 'Contraseña incorrecta'});
    }else{
      const match = await userCliente.matchContraseña(password);
      if (match) {
         return done(null,userCliente);
      }else
        return done(null,false,{message: 'Contraseña incorrecta'});
    }

}));

passport.serializeUser((user,done) =>{
   let type = user.isUser() ? 'user' : 'userCliente';
   done(null,{id: user.id, type: type});
}); // passport.serializeUser recibe una funcion y esa funcion resive un usario y una funciom callback para terminar

passport.deserializeUser( (data, done) =>{
   if(data.type === 'user'){
      User.findById(data.id, (err,user) => {
         done(err,user); //si existe un error manda un error si existe un usuario manda el user
      });
   } else{
      UserCliente.findById(data.id, (err,user) => {
         done(err,user); //si existe un error manda un error si existe un usuario manda el user
      });
   }
   
});



