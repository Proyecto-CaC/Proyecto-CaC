
const path = require('path');

module.exports = {
login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
    title: 'Ingresar'
}),
loginPost: (req, res) => res.send('Esta es la ruta que valida datos del LOGIN'),
register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
    title: 'Registro'
}),
registerPost: (req, res) => res.send('Esta es la ruta crea nuevo USUARIO'),
logout: (req, res) =>  res.send('Esta es la que cierra sesion del LOGIN'),

};