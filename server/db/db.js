const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTargets,
  newTarget,
  editTarget
}

function getTargets (db = connection) {
  return db('targets').select()
}

function newTarget (target, db = connection) {
  return db('targets')
    .insert({
      target: target.name
    })
}

function editTarget (target, db = connection) {
  return db('targets')
    .where('id', target.id)
    .update(target)
}
