const http = require('http')

const server = http.createServer(function (request, response) {

    if (request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }

    if (request.url === '/about') {
        response.write('Acerca de')
        return response.end()
    }


    if (request.url === '/shop') {
        response.write('Hello from shop')
        return response.end()
    }

    response.write(`
    <h1>Not Found</h1>
    `)
    response.end()

})

server.listen(3000)

console.log('servidor escuchando en el puerto 3000');