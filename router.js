const router = require('express').Router()

//COntrollers
const auth= require('./controllers/authController')

//Homepage
router.get('/', (req, res) => res.render('index'))

//Register Page
router.get('/register', (req, res) => res.render('register'))
router.post('/register', auth.register)

module.exports = router;