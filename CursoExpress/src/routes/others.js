const {Router} = require('express')

const router = Router()

router.get('/about', (req,res) => {
    res.send('Hola desde routes about')
})

router.get('/dashboard', (req,res) => {
    res.send('Hola desde routes dashboard')
})

module.exports = router;