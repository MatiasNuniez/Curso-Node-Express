const { readFile } = require('fs')
const { promisify } = require('util')

const readFilePromise = promisify(readFile)

// const getText = (pathFile) => {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err); 
//             }
//             resolve(data);
//         })
//     })
// }

// getText('./texto.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// para hacerlo asincrono y con menos codigo

const read = async () => {
    try {
        const result = await readFilePromise('./texto.txt', 'utf-8')
        console.log(result);   
    } catch (error) {
        console.log(error);
    }
}

read()