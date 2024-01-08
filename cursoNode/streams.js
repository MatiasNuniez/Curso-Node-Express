// const { writeFile } = require('fs/promises')

// const write = async () =>{
//     await writeFile('data.txt', 'hola mundo'.repeat(1000000))
// }

// write()

const {createReadStream} = require('fs')

const stream = createReadStream('data.txt')

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', ()=>console.log('termino'))

stream.on('error', ()=>console.log('error'))