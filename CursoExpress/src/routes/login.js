const {Router} = require('express')

const router = Router()

router.get('/login', (req,res) => {
    res.send('Hola desde routes login')
})

router.post('/login', (req,res) => {
    const {newUser, newPassword} = req.body
    res.send(`El nuevo usuario es ${newUser} y su password es ${newPassword}`)
})

module.exports = router;