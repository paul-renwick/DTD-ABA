import request from 'superagent'

const targetUrl = 'http://localhost:3000/targets'

export function newTarget (target, callback) {
  request
    .post(targetUrl)
    .send(target)
    .end((err, res) => {
      callback(err)
    })
}

export function getTargets (callback) {
  request
    .get(targetUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function editTarget (target, callback) {
  request
    .put(targetUrl)
    .send(target)
    .end((err, res) => {
      callback(err)
    })
}