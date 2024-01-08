const {Router} = require('express')

const router = Router()

router.get('/UserName', (req,res) => {
    res.send('Hola desde routes username')
})

router.get('profile', (req,res) => {
    res.send('Hola desde routes profile')
})

module.exports = router;