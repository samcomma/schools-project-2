const router = require('express').Router()
const { School, Student } = require('../db')

// GET /api/schools
router.get('/', (req, res, next) => {
  School.findAll({
    where: req.query,
    attributes: ['id', 'name'],
    include: [Student]
  })
    .then(schools => res.json(schools))
    .catch(next)
})