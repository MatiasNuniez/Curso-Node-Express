const {Router} = require('express')

const router = Router()

router.get('/miCarrito', (req,res) => {
    res.send('Hola desde routes carrito')
})


router.post('/miCarrito', (req,res) => {
    const {carrito, price} = req.body
    res.send(`Este es el ${carrito} y este es el precio ${price}`)
})


module.exports = router;