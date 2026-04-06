const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/add', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send('Student Added');
});

router.get('/view', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.put('/update/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send('Student Updated');
});

router.delete('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send('Student Deleted');
});

router.get('/addtest', async (req, res) => {
  const student = new Student({
    name: "Jay",
    email: "jay@gmail.com",
    course: "BTech"
  });

  await student.save();
  res.send("Test Student Added");
});
module.exports = router;