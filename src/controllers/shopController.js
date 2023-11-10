const shopControllers = {
    shop: (req , res) => res.send('Ruta de vista shop'),
    cart: (req , res) => res.send('Ruta de vista cart'),
    itemid : (req , res) => res.send('Ruta para buscar un producto de un id'),
    itemidadd : (req , res) => res.send('Ruta para añadir item al carrito'),
    cartpost : (req , res) => res.send('Ruta para ir a chequear'),

}

module.exports = shopControllers;