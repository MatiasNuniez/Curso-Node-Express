const fs = require ('fs')

console.log(fs);

const first = fs.readFileSync('./data/first.txt', 'utf-8')

const second = fs.readFileSync('./data/second.txt')

const write = fs.writeFileSync('./data/third.txt', 'Este es un tercer archivo', {flag:'a'})

console.log(first);
console.log(second.toString());