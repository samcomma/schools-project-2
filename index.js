const express = require('express')
const app = express()
const path = require('path')
const db = require('./db')
const { School, Student } = db.models

const port = process.env.PORT || 3000 
app.listen(port, ()=> console.log(`Now listening to port: ${port}`))



app.use('/dist', express.static(path.join(__dirname, 'dist')))

  
app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, './index.html'))
})


app.get('/api/schools', (req, res, next)=> {
  School.findAll({
    where: req.query,
    include: [ Student ]
  })
    .then(students => res.json(students))
    .catch(next)
})


app.get('/api/schools/:schoolId', (req, res, next)=> {
  School.findById(req.params.schoolId, {
    include: [ Student ]
  })
    .then(school => res.send(school))
    .catch(next)
})


app.get('/api/students', (req, res, next)=> {
  Student.findAll({
    where: req.query,
    include: [School]
  })
    .then(students => res.json(students))
    .catch(next)
})


app.get('/api/students/:studentId', (req, res, next)=> {
  Student.findById(req.params.studentId, {
    include: [School]
  })
    .then(student => res.send(student))
    .catch(next)
})


db.syncAndSeed()
  .then(()=> console.log('Synced and Seeded'))