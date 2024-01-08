const express = require('express')
const morgan = require('morgan')

const app = express();

const products = [{ name: 'Fideos', id: 1 }, { name: 'Arroz', id: 2 }, { name: 'Dulce de Leche', id: 3 }, { name: 'Mermelada', id: 4 }, { name: 'Pan', id: 5 }]

app.use(express.json())
app.use(morgan('dev'))

app.get('/products', (req, res) => {
    res.json(products)
})

app.post('/products', (req, res) => {
    console.log({ ...req.body, id: products.length + 1 });
    products.push({ ...req.body, id: products.length + 1 })
    console.log({ products });
    res.send('Creando prodcutos')
})

app.put('/products/:id', (req, res) => {
    const newData = req.body
    // res.send('Actualizando prodcuto')
    const productFound = products.find((p) => p.id === parseInt(req.params.id)
    )
    !productFound ? res.status(404).send('No existe el elemento buscado') : console.log(productFound)
    const newProducts = products.map(p => p.id === parseInt(req.params.id) ? {...p,...newData} : p)
    console.log(newProducts)
    res.json({
        message:"Product updated sucessfully"
    })
    
})

app.delete('/products/:id', (req, res) => {
    res.send('Eliminando prodcuto')
    const productFound = products.find((p) => p.id === parseInt(req.params.id)
    )
    !productFound ? res.status(404).send('No existe el elemento buscado') : console.log(productFound)
    const newProducts = products.filter( p => p.id !== parseInt(req.params.id))
    res.sendStatus(204)
})

app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
    const productFound = products.find((p) => p.id === parseInt(req.params.id)
    )
    !productFound ? res.status(404).send('No existe el elemento buscado') : console.log(productFound)
    res.send('Obteniendo prodcuto')
})

app.listen(3000, (req, res) => {
    console.log('Server corriendo en puerto 3000');
})