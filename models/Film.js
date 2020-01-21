const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  release: { type: Number, required: true },
  format: { type: String, required: true },
  actors: { type: String, required: true, default: '' }
})

module.exports = model('Film', schema)
