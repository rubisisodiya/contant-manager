const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middlewares/authentication')
const {Contact} = require('../model/Contact')
router.post('/', authenticateUser, function(req,res){
    const body = req.body
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.get('/', authenticateUser, function(req,res){
    Contact.find({ user:req.user._id })
        .then (function(contacts){
            res.send(contacts)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.get('/:id', authenticateUser, function(req,res){
    const id= req.params.id
    Contact.findOne({
        user:req.user._id,
        _id:id
    })
        .then(function(contact){
            if(contact){
                res.send(contact)
            }
            else{
                res.send({})
            }
        })
        .catch(function(err){
            res.send(err)
        })
})
router.delete('/:id', authenticateUser, function(req,res){
    const id= req.params.id
    Contact.findOneAndDelete({
        user:req.user._id,
        _id:id
        })
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
router.put('/:id', authenticateUser, function(req,res){
    const id= req.params.id
    const body = req.body
    //finnd by id and update will not run validator
    Contact.findOneAndUpdate({
        user:req.user._id,
        _id:id
        },{$set: body},{new: true, runValidators:true})
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})
module.exports = {
    contactsRouter: router
}