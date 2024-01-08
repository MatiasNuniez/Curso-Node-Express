const myWebAddres = "www.instagram.com"

const myNumber = 30

const array = [1,2,4,6]

const objectt = {
    name:'matias',
    apellido:'nunez'
}

const total = {
    myWebAddres,
    myNumber,
    array,
    objectt
}

module.exports = total;

module.exports.name = objectt.name
module.exports.array = array

