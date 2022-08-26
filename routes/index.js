const express = require('express')
const router = express.Router();

//login/landing page
//route get /

router.get('/', (req,res) =>{
    res.render('login', {layout: 'login'})
})

router.get('/dashboard', (req,res) =>{
    res.render('dashboard')
})

module.exports = router;