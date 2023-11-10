const adminControllers = {
    admin: (req , res) => res.send('Ruta de admin'),
    crearadmin: (req , res) => res.send('Ruta para crear admin'),
    crearadminpost: (req , res) => res.send('Ruta para crear admin post'),
    editar : (req , res) => res.send('Ruta para editar admin'),
    editarid : (req , res) => res.send('Ruta para editar id'),
    eliminarid : (req , res) => res.send('Ruta para eliminar id'),

}

module.exports = adminControllers;