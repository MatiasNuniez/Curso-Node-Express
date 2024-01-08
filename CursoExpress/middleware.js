const express = require('express')
const morgan = require('morgan')

const app = express()

// next sirve para que despues de que pase por el middleware siga con su flujo y pueda pasar a la siguiente funcion
// app.use(function(req,res, next){
//     console.log(`Route:${req.url}, metodo: ${req.method}`);
//     next()
// })

app.use(morgan('dev'))

app.get('/', (req,res) => {
    res.send("Desde index sin middleware")
})

app.use(function(req,res, next){
    if (req.query.login === 'matiasnuniez192@gmail.com') {
        next()
    }else{
        res.send('No estas autorizado')
    }

})

app.get('/dashboard', (req, res)=> {
    res.send('Dashboard')
})

app.listen(3000, (req,res) => {
    console.log('servidor escuchando puerto 3000');
})