const express = require('express')
// const bcryptjs = require('bcryptjs')
const router = express.Router()
const {User} = require('../model/User')
const {authenticateUser} = require('../middlewares/authentication')
router.get('/all',function(req,res){
    User.find()
        .then (function(users){
            res.send(users)
        })
        .catch(function(err){
            res.send(err)
        })
})
//localhost:3000/users/register
router.post('/register',function(req,res){
    const body = req.body
    const user = new User(body)
    console.log(user.isNew)
    user.save()
        .then (function(user){
            console.log(user.isNew)
            res.send(user)
        })
        .catch (function(err){
            res.send(err)
        })
})
//localhost:3000/users/login
router.post('/login',function(req,res){
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then(function(user){
            return user.generateToken()
        })
        .then (function(token){
            res.send(token)
        })
        .catch(function(err){
            res.status(404).send(err)
        })
})
//localhost:3000/users/account
router.get('/account',authenticateUser ,function(req,res){
    const {user} = req
    res.send(user)
})
//localhost:3000/users/account/reset
router.put('/account/reset',authenticateUser,function(req,res){
    const {user} =req
    const body= req.body
    console.log(user._id,body.oldPassword,body.newPassword)
    User.findByCredentialsAndCompare (user._id,body.oldPassword,body.newPassword)
        .then(function(user){
            if(user){
                res.send(user)
            }
            // res.send({notice: 'successfully reset your Pasword'})
        })
        .catch(function(err){
            res.send(err)
        })
})
//localhost:3000/users/logout
router.delete('/logout', authenticateUser,function(req,res){
    const {user,token} =req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
})
module.exports = {
    usersRouter: router
}