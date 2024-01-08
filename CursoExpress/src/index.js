const express = require('express')
const path = require('path')
const app = express()
const carritoRoutes = require('./routes/carrito')
const loginRoutes = require('./routes/login')
const othersRoutes = require('./routes/others')
const usersRoutes = require('./routes/users')
const connectDB = require('./db')


// Para activar el case sensitive en las rutas, siempre tiene que estar antes de los middleware
app.set('case sensitive routing', true)

//El primer valor es el nombre de la variable y el segundo es el valor
app.set('port', 3000)


app.use(carritoRoutes)
app.use(loginRoutes)
app.use(othersRoutes)
app.use(usersRoutes)

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', { root: __dirname })
})

app.get('/User', (req, res) => {
    res.send('Con mayuscula')
}) 

app.get('/user', (req, res) => {
    res.send('Con miniscula')
})

// Para manejar rutas que no se conocen cuando entre el usuario, si no lo manejamos aparece como error 404, si lo manejamos aparece como error 200
//Res.status se usa para indicarle un estado
app.use((req, res) => {
    res.status(404).send('No se encontro esta ruta')
})

// Middleware, sirve para acceder a una carpeta y acceder a todos los archivos no a uno solo
// Si creamos una ruta que tenga el mismo nombre que cualqueiera de los archivos de esta carpeta se va a ejecutar el middleware porque es el primero que encuentra 
// El primer static es para espeficiar que solo en esa ruta podemos abrir los archivos de esa carpeta del middleware
// Siempre va ultimo para que primero verifiquemos las rutas que configuramos y si no coincide con ninguna ahi si que abra la carpeta
// Se puede configurar mas de una
app.use('/static',express.static(path.join(__dirname,'/static')))

app.listen(`${app.get('port')}`, (req, res) => {
    console.log(`Server corriendo en puerto ${app.get('port')}`);
})

// get, post, put,delete son verbos http, que describen que hace cada peticion
// El patch sirve para actualizar algun dato en especifico y no todos
// Un cliente res es un programa que nos permite trabajar solo con la parte del backend como por ejemplo postman o thunder client como extension de vs code