const jwt = require('jsonwebtoken')
require('dotenv').config();
const customAPIError = require('../errors/custom-error')

const loggin = async (req,res) => {
    const {username, password} = req.body;

    if(!username || !password){
        throw new customAPIError('Please provide email and password', 400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn : '30d'})

    res.status(200).json({msg: 'user created', token})
}


const dashboard = async (req,res) => {
    
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(201).json({msg : `Hello ${req.user.username}`, secret : `Here is your authorized data and, Your Lucky number is ${luckyNumber}`})

}

module.exports = {
    loggin,
    dashboard
}