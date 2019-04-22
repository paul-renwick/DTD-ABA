const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/targets', (req, res) => {
  db.getTargets()
    .then(targets => {
      res.send(targets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/targets', (req, res) => {
  db.newTarget(req.body)
    .then(res.sendStatus(200))
})

router.put('/targets', (req, res) => {
  db.editTarget(req.body)
    .then(res.sendStatus(200))
})

module.exports = router
