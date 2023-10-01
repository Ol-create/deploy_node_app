const express = require('express')
const mongoose = require('mongoose')
const Students = require('../models/students')

const router = express.Router();

// POST: one student = /api/students
router.post("/", async (req, res) => {
    const {name, phone, age, email} = req.body

    let student = await Students.findOne({ email })
    
    if (student) return res.send('Student are already registered!')
    
    student = new Students({
        name,
        phone,
        age,
        email,
    })

    await student.save();

    res.send(student).status(201)

});

// GET: All students = /api/students
router.get("/", async (req, res) => {
    const students = await Students.find()
    res.send(students).status(200)
});

//GET: One student = /api/students/:id
router.get("/:id", async (req, res) => {
    const student = await Students.findById(req.params.id);
    
    if (!student) return res.send("Student with the particular ID is not found").status(404);

  res.send(student).status(200);
});

module.exports = router;