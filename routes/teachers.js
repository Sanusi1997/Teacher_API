const express = require('express')
const router = express.Router()
const  Teacher = require("../models/teachers")

// Get all Teachers
router.get('/', async(req,res) => {

    try{
        const teachers =  await Teacher.find()
        res.json(teachers)

    }catch(err){
            res.status(500).json({message: err.message})
    }
})

// Create a teacher
router.post('/', async (req, res) => {
    
    const teacher = new Teacher({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department
    })
    try{
        const newTeacher = await teacher.save()
        res.status(201).json(newTeacher)
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})



module.exports = router