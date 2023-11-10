const mainControllers = {
    home: (req , res) => res.send('Ruta de Home'),
    contact: (req , res) => res.send('Ruta de Contact'),
    about: (req , res) => res.send('Ruta de about'),
    faqs: (req , res) => res.send('Ruta de faqs'),

}
module.exports = mainControllers;