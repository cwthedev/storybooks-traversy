const express = require('express')
const router = express.Router();
const passport = require('passport')
//auth with google
//route get /auth/google
router.get('/google',passport.authenticate('google', {scope: ['profile']}))

//google callback
//route get /auth/google/callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect: '/'}), 
    (req,res)=>{
        res.redirect('/dashboard')
})

//Logout USer
// /auth/logout
router.get('/logout', (req, res)=>{
req.logout()
res.redirect('/')})

module.exports = router;